import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function ProductsLoading({ className }: { className?: string }) {
  return (
    <>
      <div
        className={`grid grid-cols-2 flex-wrap gap-2 justify-center w-full ${className}`}
      >
        {Array(12)
          .fill(null)
          .map((_, index: number) => (
            <Skeleton
              className="min-w-[180px] h-[270px] md:h-[300px] 2xl:min-w-[240px] md:min-w-[100px] col-span-1 bg-zinc-300"
              key={index}
            />
          ))}
      </div>
    </>
  );
}
