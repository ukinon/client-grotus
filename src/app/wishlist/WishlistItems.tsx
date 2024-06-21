"use client";

import WishlistProductCard from "@/components/product/WishlistProductCard";
import { useGetCurrentUser } from "@/hooks/auth";
import { useGetWishlists } from "@/hooks/wishlist";
import { Cart } from "@/types/Cart";
import WishlistLoading from "./WishlistLoading";

export default function WishlistItems() {
  const { userData } = useGetCurrentUser();
  const { wishlistData, wishlistLoading } = useGetWishlists({
    id: userData?.data.id,
    query: "?perPage=10000",
  });

  return (
    <div className="flex flex-col gap-2 w-[95%]">
      {wishlistLoading && <WishlistLoading />}
      {!wishlistLoading && (
        <>
          {wishlistData?.data.length <= 0 && (
            <div className="flex flex-col gap-2 justify-center items-center h-[81dvh] text-center">
              <p>Kamu belum punya wishlist. </p>
            </div>
          )}
          {wishlistData.data.length > 0 &&
            wishlistData?.data.map((item: Cart, index: number) => (
              <WishlistProductCard key={index} data={item} />
            ))}
        </>
      )}
    </div>
  );
}
