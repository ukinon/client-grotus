"use client";

import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import React from "react";
import { BiMicrophone } from "react-icons/bi";
import { RxCaretLeft } from "react-icons/rx";

export default function Page() {
  const router = useRouter();
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-between gap-2 fixed top-0 p-5 w-full">
        <RxCaretLeft className="text-5xl" onClick={() => router.back()} />
        <Input
          placeholder="Cari Barang..."
          className="w-full rounded-full border-zinc-400"
          autoFocus
        ></Input>
        <div className="p-2 rounded-full border border-zinc-400">
          {" "}
          <BiMicrophone className="text-lg" />
        </div>
      </div>
    </div>
  );
}
