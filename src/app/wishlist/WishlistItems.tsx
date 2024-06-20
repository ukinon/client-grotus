"use client";

import WishlistProductCard from "@/components/product/WishlistProductCard";
import { useGetCurrentUser } from "@/hooks/auth";
import { useGetWishlists } from "@/hooks/wishlist";
import { Cart } from "@/types/Cart";

export default function WishlistItems() {
  const { userData } = useGetCurrentUser();
  const { wishlistData } = useGetWishlists({
    id: userData?.data.id,
    query: "?perPage=10000",
  });

  return (
    <div className="flex flex-col gap-2 w-[95%]">
      {wishlistData?.data.map((item: Cart, index: number) => (
        <WishlistProductCard key={index} data={item} />
      ))}
    </div>
  );
}
