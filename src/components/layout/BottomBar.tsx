"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiHeart, BiHome, BiScan, BiUser } from "react-icons/bi";
import { FiFileText } from "react-icons/fi";

export default function BottomBar() {
  const route = usePathname();
  const isActive = (pathname: string) => route === pathname;

  return (
    <div className="w-screen min-h-[11dvh] flex flex-row px-5 pt-2 pb-7 fixed bottom-0 items-end justify-between border-t-2 border-zinc-300 bg-white z-50 md:hidden">
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
      <Link className="w-1/6 scan" href="/predict">
        <div className="flex flex-col gap-1 justify-center items-center">
          <BiScan className="text-6xl text-white bg-primary-700 rounded-full p-3" />
        </div>
      </Link>
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
