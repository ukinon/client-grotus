"use client";

import Link from "next/link";
import { BiHeart, BiHome, BiScan, BiUser } from "react-icons/bi";
import { FiFileText } from "react-icons/fi";

export default function BottomBar() {
  const handleScanClick = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const videoElement = document.querySelector("video");
      const canvasElement = document.createElement("canvas");
      if (videoElement) {
        videoElement.srcObject = stream;
        videoElement.play();
        videoElement.onloadedmetadata = () => {
          canvasElement.width = videoElement.videoWidth;
          canvasElement.height = videoElement.videoHeight;
        };
        videoElement.onplay = () => {
          const context = canvasElement.getContext("2d");
          if (context) {
            context.drawImage(
              videoElement,
              0,
              0,
              videoElement.videoWidth,
              videoElement.videoHeight
            );
            const imageData = canvasElement.toDataURL("image/png");
            console.log(imageData); // imageData is the base64 representation of the image
          }
        };
      }
    } catch (err) {
      console.error("Failed to access the camera", err);
    }
  };

  return (
    <div className="w-screen flex flex-row px-5 pt-2 fixed bottom-0 items-end justify-between border-t-2 border-zinc-300 bg-white">
      <Link className="w-1/6" href="/">
        <div className="flex flex-col gap-1 justify-center items-center">
          <BiHome className="text-2xl" />
          <p className="text-xs">Home</p>
        </div>
      </Link>
      <Link className="w-1/6" href="/wishlist">
        <div className="flex flex-col gap-1 justify-center items-center w-full">
          <BiHeart className="text-2xl" />
          <p className="text-xs">Wishlist</p>
        </div>
      </Link>
      <div className="flex flex-col gap-1 justify-center items-center rounded-full bg-primary-700 p-4">
        <BiScan className="text-3xl text-white" onClick={handleScanClick} />
      </div>
      <Link className="w-1/6" href="/transactions">
        <div className="flex flex-col gap-1 justify-center items-center w-full">
          <FiFileText className="text-2xl" />
          <p className="text-xs">Transaksi</p>
        </div>
      </Link>
      <Link className="w-1/6" href="/profile">
        <div className="flex flex-col gap-1 justify-center items-center w-full">
          <BiUser className="text-2xl" />
          <p className="text-xs">Profil</p>
        </div>
      </Link>
    </div>
  );
}
