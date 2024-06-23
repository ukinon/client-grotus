"use client";

import CheckoutBar from "@/components/layout/CheckoutBar";
import { Skeleton } from "@/components/ui/skeleton";
import { Cart } from "@/types/Cart";

export default function CheckoutItemsLoading() {
  return (
    <div className="w-full h-full flex flex-col gap-2 p-3">
      {Array(3)
        .fill(null)
        .map((index: number) => (
          <Skeleton className="w-full h-[8dvh] bg-zinc-300" key={index} />
        ))}
    </div>
  );
}
