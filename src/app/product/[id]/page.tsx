import { ProductCarousel } from "@/components/product/ProductCarousel";
import ProductBar from "@/components/layout/ProductBar";
import { formatToIDR } from "@/lib/formatToIDR";
import Navbar from "@/components/layout/Navbar";

export default function page() {
  return (
    <main className="flex  flex-col items-center justify-start">
      <Navbar withBackButton withCart title="Product" />

      <div className="flex flex-col gap-4 w-[90%]">
        <ProductCarousel />
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold mt-4">Product Name</h1>
          <p className="text-lg font-semibold">{formatToIDR(123000)}</p>
        </div>

        <p className="text-sm text-gray-500">
          Lorem ipsum dolor is amet Lorem ipsum dolor is amet Lorem ipsum dolor
          is amet Lorem ipsum dolor is amet Lorem ipsum dolor is amet Lorem
          ipsum dolor is amet Lorem ipsum dolor is amet Lorem ipsum dolor is
          amet Lorem ipsum dolor is amet Lorem ipsum dolor is amet Lorem ipsum
          dolor is amet Lorem ipsum dolor is amet Lorem ipsum dolor is amet
          Lorem ipsum dolor is amet Lorem ipsum dolor is amet Lorem ipsum dolor
          is amet Lorem ipsum dolor is amet{" "}
        </p>
      </div>
      <ProductBar />
    </main>
  );
}
