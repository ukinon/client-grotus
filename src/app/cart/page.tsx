import CheckoutBar from "@/components/layout/CheckoutBar";
import Navbar from "@/components/layout/Navbar";
import NextAuth from "@auth-kit/next/NextAuth";
import CartItems from "./CartItems";

export default function page() {
  return (
    <NextAuth fallbackPath="/login">
      <main className="flex min-h-[80dvh] flex-col items-center justify-start">
        <Navbar withBackButton withCart={false} title="Keranjang" />
        <CartItems />
      </main>
    </NextAuth>
  );
}
