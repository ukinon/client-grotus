import { CarouselComponent } from "../components/Carousel";
import MainProductCard from "../components/product/MainProductCard";
import Navbar from "../components/layout/Navbar";
import BottomBar from "../components/layout/BottomBar";
import Link from "next/link";

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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden">
      <Navbar isHome withSearch searchPlaceholder="Cari barang..." />
      <div className="w-[90%]">
        <CarouselComponent />
      </div>
      <div className="flex flex-col gap-2 w-screen items-center">
        <h1 className="text-2xl font-bold mt-4 pl-7 self-start">Produk Kami</h1>
        <div className="flex overflow-x-auto w-full">
          <div
            className="flex gap-3 mx-5 items-center"
            style={{ minWidth: "max-content" }}
          >
            {data.map((item, index) => (
              <MainProductCard
                key={index}
                data={item}
                className="min-w-[150px]"
              />
            ))}
            <Link
              className="text-sm text-primary-500 font-bold"
              href="/products"
            >
              Semua
            </Link>
          </div>
        </div>
      </div>
      <BottomBar />
    </main>
  );
}
