"use client";

import Navbar from "@/components/layout/Navbar";
import React, { useEffect, useState } from "react";
import { useGetCurrentUser } from "@/hooks/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CheckoutProductDetail from "@/components/product/CheckoutProductDetail";
import { Cart } from "@/types/Cart";
import { formatToIDR } from "@/lib/formatToIDR";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetTransaction, usePayTransaction } from "@/hooks/transaction";
import { useParams, useRouter } from "next/navigation";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { RxCaretDown, RxHome, RxPerson } from "react-icons/rx";
import { BiPhone } from "react-icons/bi";
import CheckoutItemsLoading from "@/app/checkout/CheckoutItemsLoading";
import { TransactionProduct } from "@/types/Transaction";
import TransactionProductDetail from "../TranscationProductDetail";

export default function TransactionPage() {
  const router = useRouter();
  const params = useParams();
  const { userData, userLoading } = useGetCurrentUser();
  const { transactionData, transactionLoading } = useGetTransaction(
    parseInt(params.id as string)
  );
  const {
    payTransactionMutation,
    payTransactionPending,
    payTransactionSuccess,
  } = usePayTransaction();
  let total = 0;
  transactionData?.data.products.map((item: TransactionProduct) => {
    total += (item.price as number) * item.amount;
  });

  useEffect(() => {
    if (payTransactionSuccess) {
      router.push("/transactions");
    }
  }, [payTransactionSuccess]);

  function handlePay() {
    payTransactionMutation(parseInt(params.id as string));
  }
  return (
    <div className="">
      <main className="flex min-h-[80dvh] flex-col gap-5 items-center justify-start">
        <Navbar withBackButton withCart={false} title="Transaksi" />
        <div className="border-primary-500/50 border rounded-lg w-[95%] mt-2 p-3 flex flex-col gap-2  text-sm">
          <p>Dikirim ke:</p>
          {userLoading && (
            <div className="flex flex-col gap-2">
              <Skeleton className="w-32 h-3 bg-zinc-300" />
              <div className="flex flex-col gap-1">
                <Skeleton className="w-full h-3 bg-zinc-300" />
                <Skeleton className="w-1/2 h-3 bg-zinc-300" />
              </div>
            </div>
          )}
          {!userLoading && userData && userData?.data.profile.address && (
            <div className="flex flex-col gap-2">
              <p className="font-bold text-sm flex gap-2 items-center">
                <RxPerson />
                {userData?.data.profile.name}
              </p>
              <p className="text-xs flex gap-2 items-center">
                <RxHome className="text-xl" />
                {userData?.data.profile.address}
              </p>
              <p className="text-xs flex gap-1 items-center">
                <BiPhone className="text-xl text-zinc-600" />
                {`+${userData?.data.profile.phone}`}
              </p>
            </div>
          )}
          {!userLoading && userData && !userData?.data.profile.address && (
            <div className="flex flex-col gap-2">
              <Button className="bg-primary-500 text-white">
                <Link href="/profile">+ Tambah alamat</Link>
              </Button>
              <p className="text-red-500 text-sm">Tambah alamat dulu, ya</p>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2 w-[95%] border rounded-lg border-primary-500/50 py-3">
          <h1 className="text-sm font-bold px-3">Produk</h1>

          {transactionLoading && <CheckoutItemsLoading />}
          {transactionData && !transactionLoading && (
            <TransactionProductDetail
              data={transactionData?.data.products[0]}
            />
          )}
          {transactionData?.data.products.length > 1 && (
            <Collapsible>
              <CollapsibleTrigger className="text-xs w-full  flex flex-col justify-between pl-4 pr-2">
                <div className="flex flex-row w-full justify-between mb-3 items-center">
                  <p> +{transactionData?.data.products.length - 1} Lainnya</p>
                  <RxCaretDown className="text-xl" />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-3">
                {transactionData?.data.products.map(
                  (item: TransactionProduct, index: number) =>
                    index != 0 && (
                      <TransactionProductDetail key={index} data={item} />
                    )
                )}
              </CollapsibleContent>
            </Collapsible>
          )}
        </div>

        <div className="flex flex-col gap-2 border border-primary-500/50 p-3 w-[95%] rounded-lg">
          <h1 className="text-sm font-bold">Metode Pengiriman</h1>
          <p>{transactionData?.data.delivery_method}</p>
        </div>

        <div className="flex flex-col gap-2 border border-primary-500/50 p-3 w-[95%] rounded-lg">
          <h1 className="text-sm font-bold">Metode Pembayaran</h1>
          <p>{transactionData?.data.payment_method}</p>
        </div>

        <div className="flex flex-col  border border-primary-500/50 p-3 w-[95%] rounded-lg gap-5">
          <h1 className="text-sm font-bold">Ringkasan Belanja</h1>

          <div className="flex flex-col gap-2">
            <div className="flex flex-row justify-between">
              <h1 className="text-xs">Harga Produk</h1>
              <p className="text-xs">{formatToIDR(total)}</p>
            </div>
          </div>

          <div className="flex flex-row justify-between">
            <h1 className="text-sm">Total Harga</h1>
            <p className="font-bold text-sm">{formatToIDR(total)}</p>
          </div>
        </div>
        {transactionData?.data.status === "Waiting For Payment" && (
          <Button
            className="bg-primary-500 text-white w-[95%] p-5"
            disabled={!userData?.data.profile.address || payTransactionPending}
            onClick={handlePay}
          >
            Bayar
          </Button>
        )}
      </main>
    </div>
  );
}
