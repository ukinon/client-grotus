"use client";

import React, { useState, useRef } from "react";
import axios from "axios";
import Webcam from "react-webcam";
import {
  BiCamera,
  BiPhotoAlbum,
  BiRotateLeft,
  BiSend,
  BiUpload,
} from "react-icons/bi";
import { RxCaretLeft, RxRotateCounterClockwise } from "react-icons/rx";
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";

const CameraPage: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);
  const [facingMode, setFacingMode] = useState<"user" | "environment">("user");
  const [flash, setFlash] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const webcamRef = useRef<Webcam>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
      setIsModalOpen(true);
    }
  };

  const handleTakePhoto = () => {
    if (webcamRef.current) {
      setFlash(true); // Simulate flash
      setTimeout(() => {
        setFlash(false);
        const imageSrc = webcamRef.current?.getScreenshot();
        setPhoto(imageSrc as string);
        setIsModalOpen(true);
      }, 200);
    }
  };

  const handleRotateCamera = () => {
    setFacingMode((prevMode) => (prevMode === "user" ? "environment" : "user"));
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
      const response = await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
      alert("File uploaded successfully!");
      setIsModalOpen(false);
      setSelectedFile(null);
      setPhoto(null);
    } catch (error) {
      console.error("Error uploading the file:", error);
      alert("Error uploading the file.");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFile(null);
    setPhoto(null);
  };

  return (
    <div className="h-[100vh] overflow-hidden relative -mt-20 -mb-36">
      <Navbar withBackButton withCart={false} bgColor="bg-transparent" />
      {flash && <div className="flash-overlay"></div>}
      <div className="flex flex-col h-full">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width="100%"
          height="auto"
          videoConstraints={{ facingMode }}
          className="w-full h-[100dvh] object-cover"
        />
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
            <BiRotateLeft className="text-4xl" />
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
              <div>
                <Image
                  src={photo}
                  alt="Taken"
                  width={100}
                  height={100}
                  className="w-full h-[100dvh] object-cover"
                />
              </div>
            )}
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="flex flex-row fixed bottom-0 w-full items-center justify-between h-[15vh] px-8 bg-black bg-opacity-30 rounded-t-lg pb-6 text-white">
                <h1 className="text-xl">Kirim</h1>
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
    </div>
  );
};

export default CameraPage;
