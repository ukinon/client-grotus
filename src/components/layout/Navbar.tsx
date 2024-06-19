"use client";

import { Input } from "@/components/ui/input";
import { axiosInstance } from "@/lib/axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
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
  bgColor?: string;
};

export default function Navbar({
  isHome,
  searchPlaceholder,
  withSearch,
  title,
  withBackButton,
  withSearchButton,
  withCart = true,
  bgColor,
}: Props) {
  const router = useRouter();
  const isAuthenticated = useIsAuthenticated();
  const authHeader = useAuthHeader();

  useEffect(() => {
    if (isAuthenticated) {
      axiosInstance.defaults.headers.common["Authorization"] = authHeader;
    }
  }, [isAuthenticated]);

  return (
    <div
      className={`w-screen flex flex-row p-5 h-[8dvh] fixed top-0 items-center justify-between z-50  ${
        bgColor ? bgColor : "bg-white"
      }`}
    >
      <div className="flex flex-row gap-2 items-center w-full">
        {withBackButton && (
          <RxCaretLeft
            className="text-4xl bg-white rounded-full"
            onClick={() => router.back()}
          />
        )}
        {isHome && (
          <p className="font-bold mr-3 text-xl text-primary-500">Grotus</p>
        )}
        {title && <p className="font-bold text-lg">{title}</p>}
        {withSearchButton && (
          <Link
            className="w-full border border-zinc-400 rounded-full p-1.5 text-zinc-400 text-sm pl-3 line-clamp-1"
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
