"use client";

import Navbar from "@/components/layout/Navbar";
import MainProductCard from "@/components/product/MainProductCard";
import { useGetProducts } from "@/hooks/product";
import { Product } from "@/types/Product";
import { useSearchParams } from "next/navigation";
import React from "react";
import { BiSort } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";
import ProductsLoading from "./ProductsLoading";

export default function ProductsPage() {
  const params = useSearchParams();
  const { productData, productLoading } = useGetProducts(
    `?${params.toString()}`
  );

  return (
    <main className="flex flex-col items-center justify-start">
      <Navbar
        withBackButton
        withSearchButton
        searchPlaceholder={params.get("filter[search]") || "Cari barang..."}
      />
      <div className="flex flex-col gap-5 w-[90%]">
        <div className="flex flex-row gap-2 w-full justify-end pr-5 fixed left-0 top-0 mt-[8dvh] py-3 bg-white border-none">
          <button
            className={`bg-zinc-200 text-[0.7rem] rounded-full py-1 px-2`}
          >
            <BiSort className="text-base" />
          </button>
          <button
            className={`bg-zinc-200 text-[0.7rem] rounded-full py-1 px-2`}
          >
            <FiFilter className="text-base" />
          </button>
        </div>
        {productLoading && <ProductsLoading />}
        {productData && (
          <>
            {productData.data.data.length <= 0 && (
              <div className="flex h-[70dvh] items-center justify-center">
                Produk tidak ditemukan.
              </div>
            )}

            <div className="grid grid-cols-2 flex-wrap gap-2 justify-center mt-12">
              {productData?.data.data.map((product: Product) => (
                <MainProductCard
                  data={product}
                  key={product.id}
                  className="col-span-1"
                />
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
