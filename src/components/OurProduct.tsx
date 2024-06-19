"use client";

import React from "react";
import MainProductCard from "./product/MainProductCard";
import Link from "next/link";
import { Product } from "@/types/Product";
import { useGetProducts } from "@/hooks/product";

export default function OurProduct() {
  const { productData } = useGetProducts("?perPage=3");
  return (
    <div className="flex flex-col gap-2 w-screen items-center">
      <h1 className="text-2xl font-bold mt-4 pl-7 self-start">Produk Kami</h1>
      <div className="flex overflow-x-auto w-full">
        <div
          className="flex gap-3 mx-5 items-center"
          style={{ minWidth: "max-content" }}
        >
          {productData?.data.data.map((item: Product, index: number) => (
            <MainProductCard key={index} data={item} className="w-[15px]" />
          ))}
          <Link className="text-sm text-primary-500 font-bold" href="/products">
            Semua
          </Link>
        </div>
      </div>
    </div>
  );
}
