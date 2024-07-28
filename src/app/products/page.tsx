"use client";

import Navbar from "@/components/layout/Navbar";
import MainProductCard from "@/components/product/MainProductCard";
import { useGetProducts, useGetSmartSearch } from "@/hooks/product";
import { Product } from "@/types/Product";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import ProductsLoading from "./ProductsLoading";
import SortButton from "./SortButton";
import FilterButton from "./FilterButton";

export default function ProductsPage() {
  const params = useSearchParams();
  const searchText = params.get("filter[search]");
  const [shouldUseSmartSearch, setShouldUseSmartSearch] = useState(false);
  const filterNutrition = params.get("filter[nutrition]");
  const sort = params.get("sortBy") || params.get("direction");

  const { productData, productLoading } = useGetProducts(
    `?${params.toString()}`
  );
  const { searchData, searchLoading } = useGetSmartSearch(
    `?${params.toString()}`
  );
  useEffect(() => {
    if (searchText && productData) {
      const isSearchTextInProductNames = productData.data.data.some(
        (product: Product) =>
          product?.name?.toLowerCase().includes(searchText.toLowerCase())
      );
      setShouldUseSmartSearch(!isSearchTextInProductNames);
    }
  }, [searchText, productData]);

  return (
    <main className="flex flex-col items-center justify-start">
      <Navbar
        withBackButton
        withSearchButton
        searchPlaceholder={params.get("filter[search]") || "Cari barang..."}
      />
      <div className="flex flex-col gap-5 w-[90%]">
        <div className="flex justify-between items-center w-full px-5 pl-7 bg-white pb-2 md:py-2 fixed right-0 md:px-20 z-50">
          <h1 className="text-black font-bold">
            {(params.get("filter[search]") &&
              !shouldUseSmartSearch &&
              "Hasil Pencarian") ||
              params.get("filter[nutrition]") ||
              (params.get("filter[search]") &&
                shouldUseSmartSearch &&
                "Smart Search")}
          </h1>
          <div className="flex flex-row gap-4">
            <div className="relative">
              <SortButton />
              {sort && (
                <div className="absolute top-0 right-0  bg-primary-500 text-white rounded-full w-2 h-2"></div>
              )}
            </div>
            <div className="relative">
              <FilterButton />
              {filterNutrition && (
                <div className="absolute top-0 right-0  bg-primary-500 text-white rounded-full w-2 h-2"></div>
              )}
            </div>
          </div>
        </div>

        {(productLoading || searchLoading) && (
          <ProductsLoading className="mt-12 md:grid-cols-6" />
        )}
        {(!shouldUseSmartSearch && !productLoading && !searchLoading
          ? productData
          : searchData) && (
          <>
            {!shouldUseSmartSearch
              ? productData?.data.data.length <= 0
              : searchData?.products.length <= 0 && (
                  <div className="flex h-[70dvh] items-center justify-center">
                    Produk tidak ditemukan.
                  </div>
                )}

            <div className="grid grid-cols-2 md:grid-cols-6  gap-2 justify-center mt-12 md:gap-5">
              {!shouldUseSmartSearch &&
                !productLoading &&
                !searchLoading &&
                productData?.data.data.map((product: Product) => (
                  <MainProductCard
                    data={product}
                    key={product.id}
                    className="col-span-1"
                  />
                ))}
              {shouldUseSmartSearch &&
                !productLoading &&
                !searchLoading &&
                searchData?.products.map((product: Product) => (
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
