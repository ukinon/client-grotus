"use client";

import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useMemo } from "react";
import { BiMicrophone } from "react-icons/bi";
import { RxCaretLeft } from "react-icons/rx";
import SearchRecommendations from "./SearchRecommendations";
import useSpeechRecognition from "@/hooks/speechRecognition";
import debounce from "lodash/debounce";
import { updateSearchHistory } from "@/lib/searchHistory";
import SearchHistory from "./SearchHistory";

export default function Page() {
  const router = useRouter();
  const params = useSearchParams();
  const { transcript, interimTranscript, isListening, toggleListening } =
    useSpeechRecognition();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = transcript + interimTranscript;
    }
  }, [transcript, interimTranscript]);

  const updateSearchQuery = useMemo(
    () =>
      debounce((query: string) => {
        const newParams = new URLSearchParams(window.location.search);
        newParams.set("search", query);
        router.replace(
          `${window.location.pathname}?${newParams.toString()}`,
          undefined
        );
      }, 500),
    [router]
  );

  useEffect(() => {
    return () => {
      updateSearchQuery.cancel();
    };
  }, [updateSearchQuery]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-between gap-2 fixed top-0 p-5 w-full">
        <RxCaretLeft className="text-4xl" onClick={() => router.back()} />
        <Input
          ref={inputRef}
          placeholder="Cari Barang..."
          onChange={(e) => updateSearchQuery(e.currentTarget.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const query = e.currentTarget.value;
              updateSearchHistory(query);
              router.push(`/products?filter[search]=${query}`);
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
      <div className="flex flex-col gap-5">
        {!params.get("search") && <SearchHistory />}
        <SearchRecommendations />
      </div>
    </div>
  );
}
