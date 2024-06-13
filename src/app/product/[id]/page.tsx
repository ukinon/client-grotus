import { ProductCarousel } from "@/components/product/ProductCarousel";
import ProductBar from "@/components/layout/ProductBar";
import { formatToIDR } from "@/lib/formatToIDR";
import Navbar from "@/components/layout/Navbar";
import { RxStarFilled } from "react-icons/rx";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import MainProductCard from "@/components/product/MainProductCard";

const data = [
  {
    id: 1,
    name: "Product Name",
    price: 100000,
    image: "https://via.placeholder.com/150",
    description: "Product Description",
    rating: 5,
    ratingCount: 5,
  },
  {
    id: 2,
    name: "Product Name 2",
    price: 200000,
    description: "Product Description 2",
    image: "https://via.placeholder.com/150",
    rating: 4.5,
    ratingCount: 5,
  },
  {
    id: 3,
    name: "Product Name 2",
    price: 200000,
    description: "Product Description 2",
    image: "https://via.placeholder.com/150",
    rating: 4.5,
    ratingCount: 5,
  },
];
export default function page() {
  return (
    <main className="flex  flex-col items-center justify-start overflow-x-hidden">
      <Navbar withBackButton withCart title="Product" />

      <div className="flex flex-col gap-4 w-[90%] ">
        <ProductCarousel />
        <div className="flex flex-col gap-1 border-b-2 pb-3">
          <h1 className="text-2xl font-bold mt-4">Product Name</h1>
          <p className="text-lg font-semibold">{formatToIDR(123000)}</p>
          <div className="flex flex-row items-center gap-2">
            <RxStarFilled className="text-yellow-500 text-lg" />
            <p>5</p>
          </div>
        </div>

        <p className="text-sm text-gray-500 line-clamp-3">
          Lorem ipsum dolor is amet Lorem ipsum dolor is amet Lorem ipsum dolor
          is amet Lorem ipsum dolor is amet Lorem ipsum dolor is amet Lorem
          ipsum dolor is amet Lorem ipsum dolor is amet Lorem ipsum dolor is
          amet Lorem ipsum dolor is amet Lorem ipsum dolor is amet Lorem ipsum
          dolor is amet Lorem ipsum dolor is amet Lorem ipsum dolor is amet
          Lorem ipsum dolor is amet Lorem ipsum dolor is amet Lorem ipsum dolor
          is amet Lorem ipsum dolor is amet{" "}
        </p>
        <Drawer>
          <DrawerTrigger className="border-b-2 pb-3" asChild>
            <p className="text-xs text-primary-500">Baca selengkapnya</p>
          </DrawerTrigger>

          <DrawerContent className="flex flex-col items-start">
            <DrawerHeader>
              <h1 className="text-xl font-bold">Deskripsi lengkap</h1>
            </DrawerHeader>
            <p className="text-sm text-gray-500 p-5 ">
              Lorem ipsum dolor is amet Lorem ipsum dolor is amet Lorem ipsum
              dolor is amet Lorem ipsum dolor is amet Lorem ipsum dolor is amet
              Lorem ipsum dolor is amet Lorem ipsum dolor is amet Lorem ipsum
              dolor is amet Lorem ipsum dolor is amet Lorem ipsum dolor is amet
              Lorem ipsum dolor is amet Lorem ipsum dolor is amet Lorem ipsum
              dolor is amet Lorem ipsum dolor is amet Lorem ipsum dolor is amet
              Lorem ipsum dolor is amet Lorem ipsum dolor is amet{" "}
            </p>
          </DrawerContent>
        </Drawer>

        <div className="flex flex-col gap-2 w-screen items-center">
          <h1 className="text-2xl font-bold mt-4 self-start">Produk Lainnya</h1>
          <div className="flex overflow-x-auto w-full">
            <div
              className="grid grid-cols-2 gap-2"
              style={{ minWidth: "max-content" }}
            >
              {data.map((item, index) => (
                <MainProductCard
                  key={index}
                  data={item}
                  className="min-w-[150px] col-span-1"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <ProductBar />
    </main>
  );
}
