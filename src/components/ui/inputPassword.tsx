"use client";

import React, { useState } from "react";
import { RxEyeClosed, RxEyeOpen, RxLockClosed } from "react-icons/rx";
import { Input } from "./input";

export default function InputPassword({
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-row rounded-lg border border-zinc-500 w-full items-center px-3">
      <RxLockClosed className="text-lg" />
      <Input
        placeholder="Masukkan password mu..."
        className="border-none placeholder:text-sm"
        type={show ? "text" : "password"}
        {...props}
      />
      {show ? (
        <RxEyeClosed className="text-lg" onClick={() => setShow(!show)} />
      ) : (
        <RxEyeOpen className="text-lg" onClick={() => setShow(!show)} />
      )}
    </div>
  );
}
