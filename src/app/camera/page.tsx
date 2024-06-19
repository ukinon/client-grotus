"use client";

import React, { useState, useRef } from "react";
import axios from "axios";
import Webcam from "react-webcam";
import { BiCamera, BiPhotoAlbum, BiUpload } from "react-icons/bi";
import { RxRotateCounterClockwise } from "react-icons/rx";

const CameraPage: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);
  const [facingMode, setFacingMode] = useState<"user" | "environment">("user");
  const [flash, setFlash] = useState<boolean>(false);
  const webcamRef = useRef<Webcam>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleTakePhoto = () => {
    if (webcamRef.current) {
      setFlash(true); // Simulate flash
      setTimeout(() => {
        setFlash(false);
        const imageSrc = webcamRef?.current?.getScreenshot();
        setPhoto(imageSrc as string);
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
    } catch (error) {
      console.error("Error uploading the file:", error);
      alert("Error uploading the file.");
    }
  };

  return (
    <div>
      {flash && <div className="flash-overlay"></div>}
      <form onSubmit={handleSubmit}>
        <div>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={320}
            height={240}
            videoConstraints={{ facingMode }}
            className="w-screen h-[75dvh]"
          />
          <div className="flex flex-row items-center justify-between h-[17dvh] px-8 bg-primary-700 rounded-t-lg">
            <input
              className="hidden"
              id="takePicture"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
            <label htmlFor="takePicture">
              <BiPhotoAlbum className="text-4xl text-white" />
            </label>
            <button
              type="button"
              className="bg-white p-5 rounded-full"
              onClick={handleTakePhoto}
            >
              <BiCamera className="text-4xl" />
            </button>
            <button
              type="button"
              className="text-white"
              onClick={handleRotateCamera}
            >
              <RxRotateCounterClockwise className="text-4xl" />
            </button>
          </div>
        </div>
        <button type="submit">
          <BiUpload className="text-4xl" />
        </button>
      </form>
      {selectedFile && (
        <div>
          <h4>Selected File:</h4>
          <p>{selectedFile.name}</p>
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Selected"
            width="200"
          />
        </div>
      )}
      {photo && (
        <div>
          <h4>Taken Photo:</h4>
          <img src={photo} alt="Taken" width="200" />
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
          opacity: 0.8;
          z-index: 9999;
        }
      `}</style>
    </div>
  );
};

export default CameraPage;
