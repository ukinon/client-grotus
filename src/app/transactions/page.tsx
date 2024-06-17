"use client";

import BottomBar from "@/components/layout/BottomBar";
import Navbar from "@/components/layout/Navbar";
import TransactionProductCard from "@/components/product/TransactionProductCard";
import { setParams } from "@/lib/setParams";
import { Transaction } from "@/types/Transaction";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const data: Transaction[] = [
  {
    product: {
      name: "Product Name",
      price: 100000,
      description: "Product Description",
      image: "https://via.placeholder.com/150",
      variant: "Variant",
      rating: 5,
      ratingCount: 5,
    },
    status: "Berlangsung",
    quantity: 1,
    total: 100000,
  },
  {
    product: {
      name: "Product Name 2",
      price: 100000,
      description: "Product Description",
      image: "https://via.placeholder.com/150",
      variant: "Variant",
      rating: 5,
      ratingCount: 5,
    },
    status: "Selesai",
    quantity: 1,
    total: 100000,
  },
  {
    product: {
      name: "Product Name 3",
      price: 100000,
      description: "Product Description",
      image: "https://via.placeholder.com/150",
      variant: "Variant",
      rating: 5,
      ratingCount: 5,
    },
    status: "Batal",
    quantity: 1,
    total: 100000,
  },
];

export default function TransactionPage() {
  const params = useSearchParams();
  const status = params.get("filter[status]");

  useEffect(() => {
    setParams({
      params: "filter[status]",
      value: "all",
    });
  }, []);

  function setFilter(value: string) {
    setParams({
      params: "filter[status]",
      value: value,
    });
  }

  return (
    <main className="flex h-screen flex-col items-center justify-start relative">
      <Navbar withSearch searchPlaceholder="Cari transaksi..." />

      <div className="flex flex-row gap-2 justify-center w-full fixed left-0 top-0 mt-[8dvh] py-3 bg-white">
        <button
          onClick={() => setFilter("all")}
          className={`bg-zinc-200 text-[0.7rem] rounded-full px-3 py-1 min-w-20 ${
            status == "all" && "border border-secondary-400 text-secondary-400 "
          }`}
        >
          Semua
        </button>
        <button
          onClick={() => setFilter("ongoing")}
          className={`bg-zinc-200 text-[0.7rem] rounded-full px-3 py-1 min-w-20 ${
            status == "ongoing" &&
            "border border-secondary-400 text-secondary-400 "
          }`}
        >
          Berlangsung
        </button>
        <button
          onClick={() => setFilter("finished")}
          className={`bg-zinc-200 text-[0.7rem] rounded-full px-3 py-1 min-w-20 ${
            status == "finished" &&
            "border border-secondary-400 text-secondary-400 "
          }`}
        >
          Selesai
        </button>
        <button
          onClick={() => setFilter("cancelled")}
          className={`bg-zinc-200 text-[0.7rem] rounded-full px-3 py-1 min-w-20 ${
            status == "cancelled" &&
            "border border-secondary-400 text-secondary-400 "
          }`}
        >
          Batal
        </button>
      </div>
      <div className="flex flex-col mt-12 w-[90%] gap-2">
        {data.map((item, index) => (
          <TransactionProductCard data={item} key={index} />
        ))}
      </div>
      <BottomBar />
    </main>
  );
}
