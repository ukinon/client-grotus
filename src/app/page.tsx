import { CarouselComponent } from "../components/Carousel";
import Navbar from "../components/layout/Navbar";
import BottomBar from "../components/layout/BottomBar";
import OurProduct from "@/components/OurProduct";

export default function Home() {
  return (
    <main className="flex min-h-[80dvh] flex-col items-center overflow-x-hidden mb-28">
      <Navbar isHome withSearchButton searchPlaceholder="Cari barang..." />
      <div className="w-[90%]">
        <CarouselComponent />
      </div>
      <OurProduct />
      <BottomBar />
    </main>
  );
}
