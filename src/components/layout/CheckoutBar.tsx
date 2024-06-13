"use client";

import { Button } from "../ui/button";

export default function CheckoutBar() {
  return (
    <div className="w-screen flex flex-row p-5 pb-8 fixed bottom-0 items-center justify-between border-t-2 border-zinc-300 bg-white">
      <h1>Total: Rp999999</h1>

      <Button className="bg-primary-500 text-base text-white">Checkout</Button>
    </div>
  );
}
