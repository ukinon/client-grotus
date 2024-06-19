"use client";

import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";
import { BiMicrophone } from "react-icons/bi";
import { RxCaretLeft } from "react-icons/rx";
import SearchRecommendations from "./SearchRecommendations";
import useSpeechRecognition from "@/hooks/speechRecognition";

export default function Page() {
  const router = useRouter();
  const { transcript, interimTranscript, isListening, toggleListening } =
    useSpeechRecognition();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = transcript + interimTranscript;
    }
  }, [transcript, interimTranscript]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-between gap-2 fixed top-0 p-5 w-full">
        <RxCaretLeft className="text-4xl" onClick={() => router.back()} />
        <Input
          ref={inputRef}
          placeholder="Cari Barang..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              router.push(`/products?filter[search]=${e.currentTarget.value}`);
            }
          }}
          className="w-full border border-zinc-400 rounded-full"
          autoFocus
        />
        <div
          className={`p-2 rounded-full border border-zinc-400 cursor-pointer ${
            isListening ? "bg-green-500" : ""
          }`}
          onClick={toggleListening}
        >
          <BiMicrophone className="text-lg" />
        </div>
      </div>
      <SearchRecommendations />
    </div>
  );
}
