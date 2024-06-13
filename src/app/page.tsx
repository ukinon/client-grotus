import { CarouselComponent } from "../components/Carousel";
import MainProductCard from "../components/product/MainProductCard";
import Navbar from "../components/layout/Navbar";
import BottomBar from "../components/layout/BottomBar";

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
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <div className="w-[90%]">
        <CarouselComponent />
      </div>
      <div className="flex flex-col gap-2 w-ful w-[90%] items-center">
        <h1 className="text-2xl font-bold mt-4 self-start">Best Seller</h1>
        <div className="grid grid-cols-2 gap-3 self-center">
          {data.map((item, index) => (
            <MainProductCard key={index} data={item} className="col-span-1" />
          ))}
        </div>
      </div>
      <BottomBar />
    </main>
  );
}
