import React from "react";
import { Skeleton } from "./ui/skeleton";

export default function OurProductLoading() {
  return (
    <>
      {Array(3)
        .fill(null)
        .map((index: number) => (
          <Skeleton className="w-[170px] h-[270px] bg-zinc-300" key={index} />
        ))}
    </>
  );
}