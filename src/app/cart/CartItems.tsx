"use client";

import CheckoutBar from "@/components/layout/CheckoutBar";
import CartProductCard from "@/components/product/CartProductCard";
import { useGetCurrentUser } from "@/hooks/auth";
import { useGetCarts } from "@/hooks/cart";
import { Cart } from "@/types/Cart";
import CartLoading from "./CartLoading";
import Link from "next/link";
import { CiShoppingBasket } from "react-icons/ci";

export default function CartItems() {
  const { userData } = useGetCurrentUser();
  const { cartData, cartLoading } = useGetCarts({
    id: userData?.data.id,
    query: "?perPage=10000",
  });

  let total = 0;

  cartData?.data.map((item: Cart) => {
    total += (item.product.price as number) * item.amount;
  });

  return (
    <div className="flex flex-col gap-2 w-[95%] mt-2 mb-2 md:w-[70%] md:px-24">
      {cartLoading && <CartLoading />}
      {cartData?.data.length <= 0 && !cartLoading && (
        <div className="flex flex-col gap-2 justify-center items-center h-[80vh] text-center md:w-[85vw]">
          <CiShoppingBasket className="text-[15dvh] text-zinc-500" />
          <p>Tidak ada barang di keranjang. </p>
          <Link href="/products" className="text-primary-500 font-semibold">
            Belanja dulu, yuk!
          </Link>
        </div>
      )}
      {cartData?.data.length > 0 && (
        <>
          {cartData?.data.map((item: Cart, index: number) => (
            <CartProductCard key={index} data={item} />
          ))}
          <CheckoutBar total={total} />
        </>
      )}
    </div>
  );
}
