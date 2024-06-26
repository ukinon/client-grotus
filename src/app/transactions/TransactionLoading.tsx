"use client";

import CheckoutBar from "@/components/layout/CheckoutBar";
import { Skeleton } from "@/components/ui/skeleton";

export default function TransactionLoading() {
  return (
    <>
      {Array(3)
        .fill(null)
        .map((_, index: number) => (
          <Skeleton className="w-[95vw] h-[22dvh] bg-zinc-300" key={index} />
        ))}
      <CheckoutBar total={0} loading={true} />
    </>
  );
}
