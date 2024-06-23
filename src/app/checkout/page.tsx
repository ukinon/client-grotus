"use client";

import Navbar from "@/components/layout/Navbar";
import React, { useEffect, useState } from "react";
import { useGetCurrentUser } from "@/hooks/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useGetCarts } from "@/hooks/cart";
import CheckoutProductDetail from "@/components/product/CheckoutProductDetail";
import { Cart } from "@/types/Cart";
import { formatToIDR } from "@/lib/formatToIDR";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CheckoutItemsLoading from "./CheckoutItemsLoading";
import { Skeleton } from "@/components/ui/skeleton";
import { useAddTransaction } from "@/hooks/transaction";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const router = useRouter();
  const [preferredPayment, setPreferredPayment] = useState("");
  const { userData, userLoading } = useGetCurrentUser();
  const { cartData, cartLoading } = useGetCarts({
    id: userData?.data.id,
    query: "?perPage=10000",
  });
  const {
    addTransactionMutation,
    addTransactionPending,
    addTransactionSuccess,
  } = useAddTransaction();
  let total = 0;
  cartData?.data.map((item: Cart) => {
    total += (item.product.price as number) * item.amount;
  });

  useEffect(() => {
    if (addTransactionSuccess) {
      router.push("/transactions");
    }
  }, [addTransactionSuccess]);

  function handleAddTransaction() {
    addTransactionMutation({
      address: userData?.data.profile.address,
      phone: userData?.data.profile.phone,
      payment_method: preferredPayment,
    });
  }
  return (
    <div className="">
      <main className="flex min-h-[80dvh] flex-col gap-5 items-center justify-start">
        <Navbar withBackButton withCart={false} title="Checkout" />
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
              <p className="font-bold text-sm">{userData?.data.profile.name}</p>
              <p className="text-xs">{userData?.data.profile.address}</p>
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

          {cartLoading && <CheckoutItemsLoading />}
          {cartData?.data.map((item: Cart, index: number) => (
            <CheckoutProductDetail key={index} data={item} />
          ))}
        </div>

        <div className="flex flex-col gap-2 border border-primary-500/50 p-3 w-[95%] rounded-lg">
          <h1 className="text-sm font-bold">Metode Pembayaran</h1>
          <Select onValueChange={(e) => setPreferredPayment(e)}>
            <SelectTrigger className="w-full text-xs">
              <SelectValue placeholder="Pilih Metode Pembayaran" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Metode Pembayaran</SelectLabel>
                <SelectItem value="BCA">BCA</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-row items-center justify-between border border-primary-500/50 p-3 w-[95%] rounded-lg">
          <h1 className="text-sm">Total Harga</h1>
          <p className="font-bold text-sm">{formatToIDR(total)}</p>
        </div>

        <Button
          className="bg-primary-500 text-white w-[95%] p-5"
          disabled={
            !userData?.data.profile.address ||
            preferredPayment === "" ||
            addTransactionPending
          }
          onClick={handleAddTransaction}
        >
          Lanjutkan
        </Button>
      </main>
    </div>
  );
}
