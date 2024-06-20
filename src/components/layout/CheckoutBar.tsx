"use client";

import { formatToIDR } from "@/lib/formatToIDR";
import { Button } from "../ui/button";

export default function CheckoutBar({ total }: { total: number }) {
  return (
    <div className="w-screen flex flex-row p-5 pb-8 fixed bottom-0 items-center justify-between border-t-2 border-zinc-300 bg-white">
      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-base">Total</h2>
        <h1 className="text-base font-semibold">{formatToIDR(total)}</h1>
      </div>

      <Button className="bg-primary-500 text-base py-5 text-white">
        Checkout
      </Button>
    </div>
  );
}
