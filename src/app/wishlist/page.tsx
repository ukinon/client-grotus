import BottomBar from "@/components/layout/BottomBar";
import Navbar from "@/components/layout/Navbar";
import NextAuth from "@auth-kit/next/NextAuth";

export default function page() {
  return (
    <NextAuth fallbackPath="/login">
      <main className="flex h-screen flex-col items-center justify-center">
        <Navbar title="Wishlist" />
        <div className="flex items-center justify-center">
          <p className="font-bold">Ini wishlist</p>
        </div>
        <BottomBar />
      </main>
    </NextAuth>
  );
}
