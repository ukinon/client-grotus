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
import SortButton from "./SortButton";
import FilterButton from "./FilterButton";

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
        <div className="flex justify-between items-center w-full px-5 pl-7 bg-white pb-2 md:py-2 fixed right-0 md:px-20">
          <h1 className="text-black font-bold">
            {params.get("filter[search]") ? "Hasil Pencarian" : "Semua Produk"}
          </h1>
          <div className="flex flex-row gap-4">
            <SortButton />
            <FilterButton />
          </div>
        </div>

        {productLoading && <ProductsLoading className="mt-12 md:grid-cols-6" />}
        {productData && (
          <>
            {productData.data.data.length <= 0 && (
              <div className="flex h-[70dvh] items-center justify-center">
                Produk tidak ditemukan.
              </div>
            )}

            <div className="grid grid-cols-2 md:grid-cols-6  gap-2 justify-center mt-12 md:gap-5">
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
