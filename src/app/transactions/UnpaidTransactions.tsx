"use client";

import { useGetTransactions } from "@/hooks/transaction";
import React from "react";
import WishlistLoading from "../wishlist/WishlistLoading";
import TransactionProductCard from "@/components/product/TransactionProductCard";
import { Product } from "@/types/Product";
import { Transaction } from "@/types/Transaction";

export default function UnpaidTransactions() {
  const { transactionData, transactionLoading } =
    useGetTransactions("?perPage=100000");

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
          {transactionData && transactionData.data.data.length > 0 && (
            <>
              <div className="flex flex-col mt-12 w-full items-center gap-2 px-3 mb-5">
                {transactionData.data.data.map(
                  (item: Transaction, index: number) => {
                    let total = 0;
                    item.products?.map((product: Product) => {
                      total +=
                        (product.price as number) * (product.amount as number);
                    });
                    return (
                      <TransactionProductCard
                        data={(item.products as Product[]) || []}
                        status={item.paid_at ? "Sudah bayar" : "Belum bayar"}
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
