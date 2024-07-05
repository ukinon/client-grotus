"use client";

import { CarouselComponent } from "../components/Carousel";
import Navbar from "../components/layout/Navbar";
import BottomBar from "../components/layout/BottomBar";
import OurProduct from "@/components/OurProduct";
import Categories from "@/components/Categories";

export default function Home() {
  return (
    <main className="flex min-h-[80dvh] flex-col items-center overflow-x-hidden mb-28">
      <Navbar isHome withSearchButton searchPlaceholder="Cari barang..." />

      <CarouselComponent />
      <div className="bg-white rounded-t-3xl flex flex-col gap-2 items-start -mt-6 z-30 h-full pb-24 w-full md:mt-0 relative md:pt-12">
        <div className="w-full flex justify-center overflow-x-hidden">
          <Categories />
        </div>
        <OurProduct />
      </div>
      <BottomBar />
    </main>
  );
}
