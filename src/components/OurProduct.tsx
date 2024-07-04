"use client";

import React from "react";
import MainProductCard from "./product/MainProductCard";
import Link from "next/link";
import { Product } from "@/types/Product";
import { useGetProducts } from "@/hooks/product";
import OurProductLoading from "./OurProductLoading";

export default function OurProduct() {
  const { productData, productLoading } = useGetProducts("?perPage=6");
  return (
    <div className="flex flex-col gap-5 w-screen items-center">
      <div className="flex justify-between items-center w-[90%] mt-4 px-3">
        <h1 className="text-2xl font-bold  self-start">Produk Kami</h1>
        <Link className="text-sm text-primary-500 font-bold" href="/products">
          Lihat Semua
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-2 w-[90%] md:grid-cols-6 md:gap-5">
        {productLoading && <OurProductLoading />}
        {productData &&
          productData?.data.data.map((item: Product, index: number) => (
            <MainProductCard key={index} data={item} className="col-span-1" />
          ))}
      </div>
    </div>
  );
}
