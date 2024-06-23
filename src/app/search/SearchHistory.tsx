import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BiHistory, BiX } from "react-icons/bi";
import { getSearchHistory, deleteSearchHistoryItem } from "@/lib/searchHistory"; // Adjust the import path as needed

export default function SearchHistory() {
  const router = useRouter();
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    setHistory(getSearchHistory());
  }, []);

  const handleDelete = (query: string) => {
    deleteSearchHistoryItem(query);
    setHistory((prevHistory) => prevHistory.filter((item) => item !== query));
  };

  return (
    <div className="flex flex-col gap-5 w-full">
      {history.map((data: string, index: number) => (
        <div
          className="flex flex-row justify-between items-center text-lg px-7"
          key={index}
        >
          <div
            className="flex flex-row gap-5  items-center cursor-pointer text-sm"
            onClick={() => {
              router.push(`/products?filter[search]=${data}`);
            }}
          >
            <BiHistory />
            <p>{data}</p>
          </div>
          <BiX
            className="text-2xl cursor-pointer"
            onClick={() => handleDelete(data)}
          />
        </div>
      ))}
    </div>
  );
}
