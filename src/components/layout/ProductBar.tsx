"use client";

import { Button } from "../ui/button";

import React from "react";
import { Input } from "../ui/input";

export default function ProductBar() {
  return (
    <div className="w-screen flex flex-row p-5 pb-8 fixed bottom-0 items-center justify-between bg-white">
      <div className="flex flex-row justify-center w-1/2 items-center">
        <Button className="bg-primary-500 text-lg p-2">-</Button>
        <Input
          type="number"
          value="1"
          className="w-10 h-10 text-center border-0 shadow-none"
        />
        <Button className="bg-primary-500 text-lg p-2">+</Button>
      </div>
      <Button className="bg-primary-500 text-base text-white w-full p-6">
        Tambah ke Keranjang
      </Button>
    </div>
  );
}
