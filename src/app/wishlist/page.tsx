import BottomBar from "@/components/layout/BottomBar";
import Navbar from "@/components/layout/Navbar";
import NextAuth from "@auth-kit/next/NextAuth";
import WishlistItems from "./WishlistItems";

export default function page() {
  return (
    <NextAuth fallbackPath="/login">
      <main className="flex flex-col items-center justify-start">
        <Navbar title="Wishlist" />
        <WishlistItems />
        <BottomBar />
      </main>
    </NextAuth>
  );
}
