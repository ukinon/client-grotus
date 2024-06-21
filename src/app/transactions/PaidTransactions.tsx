"use client";

import { useGetTransactions } from "@/hooks/transaction";
import React from "react";
import WishlistLoading from "../wishlist/WishlistLoading";

export default function PaidTransactions() {
  const { transactionData, transactionLoading } =
    useGetTransactions("?perPage=100000");
  console.log(transactionData);
  return (
    <>
      {transactionLoading && (
        <div className="flex flex-col mt-12 w-full items-center gap-2">
          <WishlistLoading />
        </div>
      )}
      {transactionData && (
        <>
          {transactionData.data.data.length <= 0 && (
            <div className="flex justify-center items-center h-[78dvh] w-screen">
              <p>Tidak ada transaksi.</p>
            </div>
          )}
          {transactionData.data.data.length > 0 && (
            <div className="flex flex-col mt-12 w-full items-center gap-2">
              <p>Sudah bayar</p>
            </div>
          )}
        </>
      )}
    </>
  );
}
