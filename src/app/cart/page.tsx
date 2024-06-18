import CartProductCard from "@/components/product/CartProductCard";
import CheckoutBar from "@/components/layout/CheckoutBar";
import Navbar from "@/components/layout/Navbar";
import NextAuth from "@auth-kit/next/NextAuth";

const data = [
  {
    name: "Product Name",
    price: 100000,
    description: "Product Description",
    image: "https://via.placeholder.com/150",
    variant: "Variant",
    rating: 5,
    ratingCount: 5,
  },
  {
    name: "Product Name 2",
    price: 200000,
    description: "Product Description 2",
    image: "https://via.placeholder.com/150",
    variant: "Variant 2",
    rating: 4.5,
    ratingCount: 5,
  },
];

export default function page() {
  return (
    <NextAuth fallbackPath="/login">
      <main className="flex h-screen flex-col items-center justify-start">
        <Navbar withBackButton withCart={false} title="Cart" />

        <div className="flex flex-col gap-2 w-[95%]">
          {data.map((item, index) => (
            <CartProductCard key={index} data={item} />
          ))}
        </div>
        <CheckoutBar />
      </main>
    </NextAuth>
  );
}
