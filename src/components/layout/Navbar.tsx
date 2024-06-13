"use client";

import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";
import { CiShoppingCart } from "react-icons/ci";

export default function Navbar() {
  return (
    <div className="w-screen flex flex-row p-5 fixed top-0 items-center justify-between z-50 bg-white">
      <p className="font-bold">Grotus</p>
      <Input
        className="w-2/3 border border-zinc-400"
        placeholder="Cari barang..."
      />
      <Link href="/cart">
        <CiShoppingCart className="text-2xl" />
      </Link>
    </div>
  );
}
