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
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { RxCaretDown, RxHome, RxPerson } from "react-icons/rx";
import { BiPhone } from "react-icons/bi";

export default function CheckoutPage() {
  const router = useRouter();
  const [preferredPayment, setPreferredPayment] = useState("");
  const [preferredShipping, setPreferredShipping] = useState("");
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
      delivery_method: preferredShipping,
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

          {cartLoading && <CheckoutItemsLoading />}
          {cartData && !cartLoading && (
            <CheckoutProductDetail data={cartData?.data[0]} />
          )}
          {cartData?.data.length > 1 && (
            <Collapsible>
              <CollapsibleTrigger className="text-xs w-full  flex flex-col justify-between pl-4 pr-2">
                <div className="flex flex-row w-full justify-between mb-3 items-center">
                  <p> +{cartData?.data.length - 1} Lainnya</p>
                  <RxCaretDown className="text-xl" />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-3">
                {cartData?.data.map(
                  (item: Cart, index: number) =>
                    index != 0 && (
                      <CheckoutProductDetail key={index} data={item} />
                    )
                )}
              </CollapsibleContent>
            </Collapsible>
          )}
        </div>

        <div className="flex flex-col gap-2 border border-primary-500/50 p-3 w-[95%] rounded-lg">
          <h1 className="text-sm font-bold">Pilih Pengiriman</h1>
          <Select onValueChange={(e) => setPreferredShipping(e)}>
            <SelectTrigger className="w-full text-xs">
              <SelectValue placeholder="Pilih Metode Pengiriman" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Metode Pengiriman</SelectLabel>
                <SelectItem value="JNE">JNE </SelectItem>
                <SelectItem value="Anteraja">Anteraja </SelectItem>
                <SelectItem value="Go-Send">Go-Send </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-2 border border-primary-500/50 p-3 w-[95%] rounded-lg">
          <h1 className="text-sm font-bold">Pilih Pembayaran</h1>
          <Select onValueChange={(e) => setPreferredPayment(e)}>
            <SelectTrigger className="w-full text-xs">
              <SelectValue placeholder="Pilih Metode Pembayaran" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Metode Pembayaran</SelectLabel>
                <SelectItem value="BCA">BCA</SelectItem>
                <SelectItem value="BRI">BRI</SelectItem>
                <SelectItem value="Mandiri">Mandiri</SelectItem>
                <SelectItem value="BNI">BNI</SelectItem>
                <SelectItem value="Cash On Delivery">COD</SelectItem>
                <SelectItem value="Gopay">GoPay</SelectItem>
                <SelectItem value="OVO">OVO</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
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

        <Button
          className="bg-primary-500 text-white w-[95%] p-5"
          disabled={
            !userData?.data.profile.address ||
            preferredPayment === "" ||
            preferredShipping === "" ||
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
