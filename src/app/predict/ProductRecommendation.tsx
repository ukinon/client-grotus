"use client";

import MainProductCard from "@/components/product/MainProductCard";
import { useGetProducts } from "@/hooks/product";
import { Product } from "@/types/Product";
import React from "react";

type Props = {
  nutrition: string;
};

export default function ProductRecommendation({ nutrition }: Props) {
  const { productData } = useGetProducts(
    `?perPage=10000000&filter[nutrition]=${nutrition}`
  );
  console.log(productData);

  return (
    <div className="flex flex-col gap-8 items-center w-[90%]">
      <h1 className="text-2xl font-bold mt-4 self-start">Rekomendasi Produk</h1>
      <div className="flex overflow-x-hidden justify-center w-full">
        <div className="grid grid-cols-2 gap-2">
          {productData?.data.data.map((item: Product, index: number) => (
            <MainProductCard key={index} data={item} className="col-span-1" />
          ))}
        </div>
      </div>
    </div>
  );
}
