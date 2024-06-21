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
    <div className="w-screen h-[11dvh] flex flex-row p-5 pb-8 fixed bottom-0 items-center justify-between bg-white">
      <div className="flex flex-row justify-center w-1/2 items-center">
        <Button
          onClick={() => setAmount(amount - 1)}
          className="bg-primary-500 text-lg p-2"
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
          className="bg-primary-500 text-lg p-2"
        >
          +
        </Button>
      </div>
      <Button
        onClick={() => handleAddToCart()}
        className="bg-primary-500 text-base text-white w-full p-6"
      >
        Tambah ke Keranjang
      </Button>
    </div>
  );
}
