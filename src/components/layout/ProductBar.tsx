"use client";

import { Button } from "../ui/button";

import React, { useState } from "react";
import { Input } from "../ui/input";
import { useAddToCart } from "@/hooks/product";

export default function ProductBar({ id }: { id: number }) {
  const [amount, setAmount] = useState(1);
  const { addToCartMutation } = useAddToCart({
    id: id,
    amount: amount,
  });

  const handleAddToCart = async () => {
    await addToCartMutation();
  };

  return (
    <div className="w-screen min-h-[11dvh] flex flex-row px-5 pt-2 pb-7 fixed bottom-0 items-end justify-between  border-zinc-300 bg-white gap-3">
      <div className="flex flex-row justify-center w-1/2 items-center border-primary-500 border rounded-full">
        <Button
          onClick={() => setAmount(amount - 1)}
          className="text-lg shadow-none"
        >
          -
        </Button>
        <Input
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value))}
          className="w-10 h-10 text-center border-0 shadow-none"
        />
        <Button
          onClick={() => setAmount(amount + 1)}
          className=" text-lg shadow-none"
        >
          +
        </Button>
      </div>
      <Button
        onClick={() => handleAddToCart()}
        className="bg-primary-500 text-base text-white w-full p-6 rounded-full"
      >
        Tambah ke Keranjang
      </Button>
    </div>
  );
}
