"use client";

import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { RxCaretLeft } from "react-icons/rx";

type Props = {
  isHome?: boolean;
  searchPlaceholder?: string;
  withSearchButton?: boolean;
  withSearch?: boolean;
  title?: string;
  withBackButton?: boolean;
  withCart?: boolean;
};

export default function Navbar({
  isHome,
  searchPlaceholder,
  withSearch,
  title,
  withBackButton,
  withSearchButton,
  withCart = true,
}: Props) {
  const router = useRouter();

  return (
    <div className="w-screen flex flex-row p-5 h-[8dvh] fixed top-0 items-center justify-between z-50 bg-white">
      <div className="flex flex-row gap-2 items-center w-full">
        {withBackButton && (
          <RxCaretLeft className="text-3xl" onClick={() => router.back()} />
        )}
        {isHome && <p className="font-bold mr-3">Grotus</p>}
        {title && <p className="font-bold text-xl">{title}</p>}
        {withSearchButton && (
          <Link
            className="w-full border border-zinc-400 rounded-full p-1.5 text-zinc-400 text-sm pl-3"
            href="/search"
          >
            {searchPlaceholder}
          </Link>
        )}
        {withSearch && (
          <Input
            className="w-full  border border-zinc-400 rounded-full"
            placeholder={searchPlaceholder}
          />
        )}
      </div>
      {withCart && (
        <Link href="/cart" className="ml-3">
          <CiShoppingCart className="text-2xl" />
        </Link>
      )}
    </div>
  );
}
