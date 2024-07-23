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
      <div className="w-screen flex flex-row p-5 h-[8dvh] fixed top-0 items-center justify-between z-50">
        <div className="flex flex-row gap-2 items-center w-full">
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
            className="w-full  border border-zinc-400 rounded-full text-sm placeholder:text-sm"
            autoFocus
          />
        </div>
        <div
          className={`ml-3 border border-zinc-400 p-2 rounded-full ${
            isListening ? "text-red-500 bg-primary-300" : "bg-white"
          }`}
          onClick={toggleListening}
        >
          <BiMicrophone className="text-lg" />
        </div>
      </div>
      <div className="flex flex-col gap-5 text-xs">
        {(!params.get("search") || params.get("search") == "") && (
          <SearchHistory />
        )}
        {params.get("search") != "" && <SearchRecommendations />}
      </div>
    </div>
  );
}
