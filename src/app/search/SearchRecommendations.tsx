import { useGetProduct, useGetProducts } from "@/hooks/product";
import { updateSearchHistory } from "@/lib/searchHistory";
import { Product } from "@/types/Product";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { RxCaretRight } from "react-icons/rx";

export default function SearchRecommendations() {
  const router = useRouter();
  const params = useSearchParams();
  const { productData, productLoading } = useGetProducts(
    `?perPage=5&filter[search]=${params.get("search")}`
  );
  return (
    <div className="flex flex-col gap-5 w-full">
      {productLoading && (
        <div className="flex flex-row justify-center items-center text-lg  px-6 py-8">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary-800"></div>
        </div>
      )}
      {!productLoading &&
        productData &&
        productData?.data?.data.map((product: Product, index: number) => (
          <div
            className="flex flex-row justify-between items-center text-lg  px-6"
            key={index}
            onClick={() => {
              router.push(`/products?filter[search]=${product.name}`);
              updateSearchHistory(product.name as string);
            }}
          >
            <div className="flex flex-row gap-5 text-base items-center">
              <BiSearch />
              <p>{product.name}</p>
            </div>
            <RxCaretRight className="text-2xl" />
          </div>
        ))}
    </div>
  );
}
