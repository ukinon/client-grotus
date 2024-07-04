"use client";

import { formatToIDR } from "@/lib/formatToIDR";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import Link from "next/link";

export default function CheckoutBar({
  total,
  loading,
}: {
  total: number;
  loading?: boolean;
}) {
  return (
    <div className="w-screen flex flex-row h-[11dvh] p-5 pb-8 fixed bottom-0  items-center justify-between border-t-2 border-zinc-300 bg-white  md:top-24 md:right-12   md:w-[30%] md:border md:border-primary-500 md:rounded-xl md:flex-col md:gap-12 md:h-fit md:items-start">
      <div className="flex flex-col gap-2">
        {loading && (
          <>
            <Skeleton className="w-20 h-5 bg-zinc-300" />
            <Skeleton className="w-40 h-5 bg-zinc-300" />
          </>
        )}
        {!loading && (
          <>
            <h2 className="font-bold text-base md:text-lg">Total</h2>
            <h1 className="text-base font-semibold md:text-lg">
              {formatToIDR(total)}
            </h1>
          </>
        )}
      </div>

      {loading && <Skeleton className="w-32 h-10 bg-zinc-300 py-5 md:w-full" />}
      {!loading && (
        <Button className="bg-primary-500 text-base py-5 text-white md:w-full">
          <Link href="/checkout">Checkout</Link>
        </Button>
      )}
    </div>
  );
}
