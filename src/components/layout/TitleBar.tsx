"use client";

import React from "react";
import { RxCaretLeft } from "react-icons/rx";
import { useRouter } from "next/navigation";

export default function TitleBar({ title }: Readonly<{ title: string }>) {
  const router = useRouter();

  return (
    <div className="w-screen flex flex-row gap-2 px-3 py-5 fixed top-0 items-center z-50 bg-white">
      <RxCaretLeft className="text-3xl" onClick={() => router.back()} />
      <h1 className="text-xl font-bold">{title}</h1>
    </div>
  );
}
