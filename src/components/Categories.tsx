"use client";

import { useGetNutritions } from "@/hooks/nutrition";
import React from "react";
import { Skeleton } from "./ui/skeleton";
import Link from "next/link";

// Define an array of gradient background colors
const backgroundGradients = [
  "bg-gradient-to-br from-primary-300 to-secondary-200",
  "bg-gradient-to-br from-secondary-300 to-primary-200",
  "bg-gradient-to-br from-primary-300 to-secondary-300",
  "bg-gradient-to-br from-secondary-400 to-primary-200",
  "bg-gradient-to-br from-primary-400 to-secondary-200",
];

export default function Categories() {
  const { nutritionData, nutritionLoading } = useGetNutritions({
    query: "?perPage=1000000000",
  });

  return (
    <div className="flex flex-col gap-4 pb-3 pt-6 w-[100%] ">
      <h1 className="text-2xl font-bold pl-8 md:pl-16">Jenis Nutrisi</h1>
      <div className="flex flex-row md:flex-wrap gap-2 items-center justify-start  md:py-1 md:px-6 pr-8 overflow-x-auto w-screen pl-8 md:pl-16">
        {nutritionLoading &&
          Array(14)
            .fill(null)
            .map((_, index) => (
              <Skeleton
                className="rounded-full px-10 w-24 h-20 bg-zinc-300 md:w-40"
                key={index}
              />
            ))}
        {nutritionData?.data.data.map(
          (item: { id: number; name: string }, index: number) => (
            <Link
              href={"/products?filter[nutrition]=" + item.name}
              className={`flex-shrink-0 flex justify-center items-center text-center rounded-full p-2 w-20 h-20 md:w-40 border border-zinc-400 ${
                backgroundGradients[index % backgroundGradients.length]
              } hover:shadow-lg transition-shadow duration-300`}
              key={index}
            >
              <p className="text-[0.6rem] md:text-xs px-2 text-neutral-800 font-semibold">
                {item.name}
              </p>
            </Link>
          )
        )}
      </div>
    </div>
  );
}
