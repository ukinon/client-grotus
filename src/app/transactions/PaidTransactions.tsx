"use client";

import {
  useGetProductTransactions,
  useGetTransactions,
} from "@/hooks/transaction";
import React from "react";
import WishlistLoading from "../wishlist/WishlistLoading";
import TransactionProductCard from "@/components/product/TransactionProductCard";
import { Product } from "@/types/Product";
import { Transaction } from "@/types/Transaction";
import TransactionLoading from "./TransactionLoading";

export default function PaidTransactions() {
  const { transactionData, transactionLoading } =
    useGetProductTransactions("?perPage=100000");

  return (
    <>
      {transactionLoading && (
        <div className="flex flex-col mt-12 w-full items-center gap-2">
          <TransactionLoading />
        </div>
      )}
      {transactionData && (
        <>
          {transactionData.data.data.length <= 0 && (
            <div className="flex justify-center items-center h-[78dvh] w-screen">
              <p>Tidak ada transaksi.</p>
            </div>
          )}
          {transactionData && transactionData.data.data.length > 0 && (
            <>
              <div className="flex flex-col mt-12 w-full items-center gap-2 px-3 mb-5">
                {transactionData.data.data.map(
                  (item: Product, index: number) => (
                    <TransactionProductCard
                      data={[
                        {
                          ...item,
                        },
                      ]}
                      status={"Sudah bayar"}
                      total={(item.price as number) * (item.amount as number)}
                      key={index}
                      transactionId={item.id as number}
                    />
                  )
                )}
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}
