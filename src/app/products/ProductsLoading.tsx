import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function ProductsLoading({ className }: { className?: string }) {
  return (
    <>
      <div
        className={`grid grid-cols-2 flex-wrap gap-2 justify-center ${className}`}
      >
        {Array(6)
          .fill(null)
          .map((_, index: number) => (
            <Skeleton className="w-[180px] h-[270px] bg-zinc-300" key={index} />
          ))}
      </div>
    </>
  );
}
