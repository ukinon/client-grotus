import CheckoutBar from "@/components/layout/CheckoutBar";
import Navbar from "@/components/layout/Navbar";
import NextAuth from "@auth-kit/next/NextAuth";
import CartItems from "./CartItems";

export default function page() {
  return (
    <NextAuth fallbackPath="/login">
      <main className="flex h-screen flex-col items-center justify-start">
        <Navbar withBackButton withCart={false} title="Cart" />
        <CartItems />
      </main>
    </NextAuth>
  );
}
