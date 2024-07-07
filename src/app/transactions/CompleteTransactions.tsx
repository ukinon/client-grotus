"use client";

import {
  useGetProductTransactions,
  useGetTransactions,
} from "@/hooks/transaction";
import React from "react";
import TransactionProductCard from "@/components/product/TransactionProductCard";
import { Product } from "@/types/Product";
import TransactionLoading from "./TransactionLoading";
import { Transaction } from "@/types/Transaction";

export default function CompleteTransaction() {
  const { transactionData, transactionLoading } = useGetTransactions(
    "?perPage=100000&filter[status]=Completed"
  );

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
              <div className="flex flex-col mt-12 w-full md:w-[60vw] items-center gap-2 px-3 mb-5">
                {transactionData.data.data.map(
                  (
                    item: Transaction & {
                      status: "Waiting For Payment" | "Shipped" | "Completed";
                    },
                    index: number
                  ) => {
                    let total = 0;
                    item.products?.map((product: Product) => {
                      total +=
                        (product.price as number) * (product.amount as number);
                    });
                    return (
                      <TransactionProductCard
                        data={(item.products as Product[]) || []}
                        status={item.status}
                        total={total}
                        key={index}
                        transactionId={item.id as number}
                      />
                    );
                  }
                )}
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}
