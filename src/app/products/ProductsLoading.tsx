import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function ProductsLoading() {
  return (
    <>
      <div className="grid grid-cols-2 flex-wrap gap-2 justify-center mt-12">
        {Array(10)
          .fill(null)
          .map((index: number) => (
            <Skeleton className="w-[170px] h-[270px] bg-zinc-300" key={index} />
          ))}
      </div>
    </>
  );
}
