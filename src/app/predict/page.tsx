"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  BiCamera,
  BiPhotoAlbum,
  BiRotateLeft,
  BiSend,
  BiAdjust,
  BiArrowBack,
} from "react-icons/bi";
import { RxCaretLeft, RxRotateCounterClockwise } from "react-icons/rx";
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import { axiosInstanceML } from "@/lib/axios";
import LoadingPage from "@/components/ui/LoadingPage";
import PredictionPage from "./PredictionPage";
import { FiRotateCcw, FiRotateCw } from "react-icons/fi";

const PredictPage: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);
  const [cameraFacing, setCameraFacing] = useState<"user" | "environment">(
    "environment"
  );
  const [isMirrored, setIsMirrored] = useState(true);
  const [flash, setFlash] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { mutate, data, isPending } = useMutation({
    mutationFn: async (formData: FormData) => {
      const response = await axiosInstanceML.post("/predict", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data;
    },
    onError: (error) => {
      console.error("Error uploading the file:", error);
    },
  });

  useEffect(() => {
    async function setupCamera() {
      try {
        const constraints: MediaStreamConstraints = {
          video: {
            facingMode: cameraFacing,
            width: { ideal: 1920 },
            height: { ideal: 1080 },
          },
        };
        const newStream = await navigator.mediaDevices.getUserMedia(
          constraints
        );
        setStream(newStream);
        if (videoRef.current) {
          videoRef.current.srcObject = newStream;
          videoRef.current.onloadedmetadata = () => {
            videoRef.current?.play();
          };
        }
        // Set mirroring based on camera facing
        setIsMirrored(cameraFacing === "user");
      } catch (error) {
        console.error("Error accessing the camera:", error);
      }
    }
    setupCamera();
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [cameraFacing]);

  const handleRotateCamera = () => {
    setCameraFacing((prev) => (prev === "user" ? "environment" : "user"));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
      setIsModalOpen(true);
    }
  };

  const handleTakePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      setFlash(true);
      setTimeout(() => {
        setFlash(false);
        const context = canvasRef.current?.getContext("2d");
        if (context && videoRef.current && canvasRef.current) {
          // Set canvas dimensions to match video dimensions
          canvasRef.current.width = videoRef.current.videoWidth;
          canvasRef.current.height = videoRef.current.videoHeight;

          // Draw the video frame to the canvas
          context.drawImage(
            videoRef.current as HTMLVideoElement,
            0,
            0,
            canvasRef.current.width,
            canvasRef.current.height
          );

          // Get the image data from the canvas
          const imageSrc = canvasRef.current.toDataURL("image/jpeg");
          setPhoto(imageSrc);
          setIsModalOpen(true);
        }
      }, 200);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedFile && !photo) {
      alert("Please select a file or take a photo first!");
      return;
    }

    const formData = new FormData();
    if (selectedFile) {
      formData.append("file", selectedFile);
    }
    if (photo) {
      const response = await fetch(photo);
      const blob = await response.blob();
      formData.append("file", blob, "photo.jpg");
    }

    try {
      mutate(formData);
    } catch (error) {
      console.error("Error uploading the file:", error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFile(null);
    setPhoto(null);
  };

  return (
    <div className="min-h-[100dvh] overflow-hidden relative -mt-[8dvh]">
      {isPending && <LoadingPage />}
      {!data && (
        <>
          <Navbar withBackButton withCart={false} bgColor="bg-transparent" />
          {flash && <div className="flash-overlay"></div>}
          <div className="flex flex-col h-full">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-[100dvh] object-cover"
              style={{
                transform: isMirrored ? "scaleX(-1)" : "none",
              }}
            />
            <canvas ref={canvasRef} style={{ display: "none" }} />
            <div className="flex flex-row fixed bottom-0 w-full items-center justify-between h-[15vh] px-8 bg-transparent rounded-t-lg pb-6">
              <input
                className="hidden"
                id="takePicture"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
              <label
                htmlFor="takePicture"
                className="text-black bg-white p-3 rounded-full"
              >
                <BiPhotoAlbum className="text-4xl " />
              </label>
              <button
                type="button"
                className="bg-primary-500 text-white p-5 rounded-full"
                onClick={handleTakePhoto}
              >
                <BiCamera className="text-4xl" />
              </button>
              <button
                type="button"
                className="text-black bg-white p-3 rounded-full"
                onClick={handleRotateCamera}
              >
                <FiRotateCcw className="text-4xl" />
              </button>
            </div>
          </div>
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50 h-screen">
              <div className="bg-black rounded-lg max-w-md w-full text-center h-screen">
                {selectedFile && (
                  <div>
                    <Image
                      src={URL.createObjectURL(selectedFile)}
                      alt="Selected"
                      width={100}
                      height={100}
                      className="w-full h-[100dvh] object-cover"
                    />
                  </div>
                )}
                {photo && (
                  <div className="w-screen h-screen object-cover">
                    <Image
                      src={photo}
                      alt="Taken"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <form onSubmit={handleSubmit} className="mt-4">
                  <div className="flex flex-row fixed bottom-0 w-full items-center justify-between h-[15vh] px-8 bg-black bg-opacity-30 rounded-t-lg pb-6 text-white">
                    <button
                      onClick={closeModal}
                      className="bg-primary-500 text-white px-4 py-3 rounded-full mr-2 "
                    >
                      <BiArrowBack className="text-4xl" />
                    </button>
                    <button
                      type="submit"
                      className="bg-primary-500 text-white px-4 py-3 rounded-full mr-2"
                    >
                      <BiSend className="text-4xl" />
                    </button>
                  </div>

                  <RxCaretLeft
                    onClick={closeModal}
                    className="text-4xl bg-white rounded-full fixed top-5 left-5"
                  />
                </form>
              </div>
            </div>
          )}

          <style jsx>{`
            .flash-overlay {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: white;
              opacity: 0.5;
              z-index: 9999;
            }
          `}</style>
        </>
      )}
      {data && (
        <PredictionPage
          data={data}
          photo={
            selectedFile
              ? URL.createObjectURL(selectedFile as File)
              : (photo as string)
          }
        />
      )}
    </div>
  );
};

export default PredictPage;
