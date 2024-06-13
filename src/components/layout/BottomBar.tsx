"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiHeart, BiHome, BiScan, BiUser } from "react-icons/bi";
import { FiFileText } from "react-icons/fi";

export default function BottomBar() {
  const route = usePathname();

  const isActive = (pathname: string) => route === pathname;

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
    <div className="w-screen flex flex-row px-5 pt-2 pb-7 fixed bottom-0 items-end justify-between border-t-2 border-zinc-300 bg-white">
      <Link className="w-1/6" href="/">
        <div
          className={`flex flex-col gap-1 justify-center items-center ${
            isActive("/") ? "text-green-500" : ""
          }`}
        >
          <BiHome className="text-2xl" />
          <p className="text-xs">Home</p>
        </div>
      </Link>
      <Link className="w-1/6" href="/wishlist">
        <div
          className={`flex flex-col gap-1 justify-center items-center ${
            isActive("/wishlist") ? "text-green-500" : ""
          }`}
        >
          <BiHeart className="text-2xl" />
          <p className="text-xs">Wishlist</p>
        </div>
      </Link>
      <div className="flex flex-col gap-1 justify-center items-center rounded-full bg-primary-700 p-4">
        <BiScan className="text-3xl text-white" onClick={handleScanClick} />
      </div>
      <Link className="w-1/6" href="/transactions">
        <div
          className={`flex flex-col gap-1 justify-center items-center ${
            isActive("/transactions") ? "text-green-500" : ""
          }`}
        >
          <FiFileText className="text-2xl" />
          <p className="text-xs">Transaksi</p>
        </div>
      </Link>
      <Link className="w-1/6" href="/profile">
        <div
          className={`flex flex-col gap-1 justify-center items-center ${
            isActive("/profile") ? "text-green-500" : ""
          }`}
        >
          <BiUser className="text-2xl" />
          <p className="text-xs">Profil</p>
        </div>
      </Link>
    </div>
  );
}
