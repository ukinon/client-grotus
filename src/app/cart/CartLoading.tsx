"use client";

import CheckoutBar from "@/components/layout/CheckoutBar";
import { Skeleton } from "@/components/ui/skeleton";
import { Cart } from "@/types/Cart";

export default function CartLoading() {
  return (
    <>
      {Array(3)
        .fill(null)
        .map((_, index: number) => (
          <Skeleton
            className="w-[95vw] h-[14dvh] bg-zinc-300 md:w-[55vw] md:h-[28dvh]"
            key={index}
          />
        ))}
      <CheckoutBar total={0} loading={true} />
    </>
  );
}
