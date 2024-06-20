"use client";

import CheckoutBar from "@/components/layout/CheckoutBar";
import CartProductCard from "@/components/product/CartProductCard";
import { useGetCurrentUser } from "@/hooks/auth";
import { useGetCarts } from "@/hooks/cart";
import { Cart } from "@/types/Cart";

export default function CartItems() {
  const { userData } = useGetCurrentUser();
  const { cartData } = useGetCarts({
    id: userData?.data.id,
    query: "?perPage=10000",
  });

  let total = 0;

  cartData?.data.map((item: Cart) => {
    total += (item.product.price as number) * item.amount;
  });

  return (
    <div className="flex flex-col gap-2 w-[95%]">
      {cartData?.data.map((item: Cart, index: number) => (
        <CartProductCard key={index} data={item} />
      ))}
      <CheckoutBar total={total} />
    </div>
  );
}
