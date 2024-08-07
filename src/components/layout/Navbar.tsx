"use client";

import CartLoading from "@/app/cart/CartLoading";
import { Input } from "@/components/ui/input";
import { useGetCurrentUser } from "@/hooks/auth";
import { useGetCarts } from "@/hooks/cart";
import { axiosInstance } from "@/lib/axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import { BiHeart, BiUser } from "react-icons/bi";
import { CiFileOn, CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import { FiFileText } from "react-icons/fi";
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
  const { userData, userLoading } = useGetCurrentUser();
  const { cartData, cartLoading } = useGetCarts({
    id: userData?.data.id,
    query: "?perPage=1000000000",
  });

  useEffect(() => {
    if (isAuthenticated) {
      axiosInstance.defaults.headers.common["Authorization"] = authHeader;
    }
  }, [isAuthenticated]);

  return (
    <>
      <div
        className={`w-screen flex flex-row p-5 h-[8dvh] fixed top-0 items-center justify-between z-50 md:hidden  ${
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
            <Link
              href={"/"}
              className="font-bold mr-3 text-xl text-primary-500"
            >
              Grotus
            </Link>
          )}
          {title && <p className="font-bold text-lg">{title}</p>}
          {withSearchButton && (
            <Link
              className="w-full border border-zinc-400 rounded-full p-1.5 text-zinc-400 text-sm pl-3 line-clamp-1 search"
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
          <>
            <Link href="/cart" className="relative ml-3">
              {(userLoading || cartLoading) && (
                <div className="absolute top-0 -right-1">
                  <div className="flex flex-row justify-center items-center text-lg">
                    <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-primary-800"></div>
                  </div>
                </div>
              )}
              {userData && cartData && cartData.data.length > 0 && (
                <div className="absolute top-0 -right-1 text-[0.6rem] bg-primary-800 text-white rounded-full px-1">
                  {cartData?.data.length}
                </div>
              )}

              <CiShoppingCart className="text-2xl" />
            </Link>
          </>
        )}
      </div>

      {/**for desktop */}
      <div
        className={`w-screen md:flex flex-row p-5 h-[8dvh] fixed top-0 items-center justify-between z-50 hidden px-20 gap-5  ${
          bgColor ? bgColor : "bg-white"
        }`}
      >
        <Link href={"/"} className="font-bold mr-3 text-2xl text-primary-500">
          Grotus
        </Link>

        {withSearchButton && (
          <Link
            className="w-[80%] border border-zinc-400 rounded-full p-1.5 text-zinc-400 text-sm pl-3 line-clamp-1"
            href="/search"
          >
            {searchPlaceholder}
          </Link>
        )}
        {withSearch && (
          <Input
            className="w-[80%]  border border-zinc-400 rounded-full"
            placeholder={searchPlaceholder}
          />
        )}
        <div className="md:flex flex-row gap-5 items-center hidden">
          {withCart && (
            <>
              <Link href="/cart" className="relative">
                {(userLoading || cartLoading) && (
                  <div className="absolute top-0 -right-1">
                    <div className="flex flex-row justify-center items-center text-lg">
                      <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-primary-800"></div>
                    </div>
                  </div>
                )}
                {userData && cartData && cartData.data.length > 0 && (
                  <div className="absolute top-0 -right-1 text-[0.6rem] bg-primary-800 text-white rounded-full px-1">
                    {cartData?.data.length}
                  </div>
                )}

                <CiShoppingCart className="text-2xl" />
              </Link>
            </>
          )}
          <Link href="/wishlist">
            <CiHeart className="text-2xl" />
          </Link>
          <Link href="/transactions">
            <CiFileOn className="text-xl" />
          </Link>

          <Link href="/profile">
            <CiUser className="text-2xl" />
          </Link>
        </div>
      </div>
    </>
  );
}
