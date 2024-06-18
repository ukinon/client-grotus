"use client";

import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import React from "react";
import { BiMicrophone } from "react-icons/bi";
import { RxCaretLeft } from "react-icons/rx";
import SearchRecommendations from "./SearchRecommendations";
import path from "path";

export default function Page() {
  const router = useRouter();
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-between gap-2 fixed top-0 p-5 w-full">
        <RxCaretLeft className="text-4xl" onClick={() => router.back()} />
        <Input
          placeholder="Cari Barang..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              router.push(`/products?filter[search]=${e.currentTarget.value}`);
            }
          }}
          className="w-full  border border-zinc-400 rounded-full"
          autoFocus
        ></Input>
        <div className="p-1 rounded-full border border-zinc-400">
          {" "}
          <BiMicrophone className="text-lg" />
        </div>
      </div>
      <SearchRecommendations />
    </div>
  );
}
