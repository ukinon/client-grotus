"use client";

import CheckoutBar from "@/components/layout/CheckoutBar";
import { Skeleton } from "@/components/ui/skeleton";

export default function WishlistLoading() {
  return (
    <>
      {Array(6)
        .fill(null)
        .map((index: number) => (
          <Skeleton className="w-[95vw] h-[12dvh] bg-zinc-300" key={index} />
        ))}
      <CheckoutBar total={0} loading={true} />
    </>
  );
}
