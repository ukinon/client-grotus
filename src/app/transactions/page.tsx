import BottomBar from "@/components/layout/BottomBar";
import Navbar from "@/components/layout/Navbar";
import TransactionProductCard from "@/components/product/TransactionProductCard";
import { Transaction } from "@/types/Transaction";

const data: Transaction[] = [
  {
    product: {
      name: "Product Name",
      price: 100000,
      description: "Product Description",
      image: "https://via.placeholder.com/150",
      variant: "Variant",
      rating: 5,
      ratingCount: 5,
    },
    status: "Berlangsung",
    quantity: 1,
    total: 100000,
  },
  {
    product: {
      name: "Product Name 2",
      price: 100000,
      description: "Product Description",
      image: "https://via.placeholder.com/150",
      variant: "Variant",
      rating: 5,
      ratingCount: 5,
    },
    status: "Selesai",
    quantity: 1,
    total: 100000,
  },
  {
    product: {
      name: "Product Name 3",
      price: 100000,
      description: "Product Description",
      image: "https://via.placeholder.com/150",
      variant: "Variant",
      rating: 5,
      ratingCount: 5,
    },
    status: "Batal",
    quantity: 1,
    total: 100000,
  },
];

export default function page() {
  return (
    <main className="flex h-screen flex-col items-center justify-start relative">
      <Navbar withSearch searchPlaceholder="Cari transaksi..." />

      <div className="flex flex-row gap-2 justify-center w-full fixed left-0 top-0 mt-[8dvh] py-3 bg-white">
        <button className="bg-zinc-200 text-[0.7rem] rounded-full px-3 py-1 min-w-20">
          Semua
        </button>
        <button className="bg-zinc-200 text-[0.7rem] rounded-full px-3 py-1 min-w-20">
          Berlangsung
        </button>
        <button className="bg-zinc-200 text-[0.7rem] rounded-full px-3 py-1 min-w-20">
          Selesai
        </button>
        <button className="bg-zinc-200 text-[0.7rem] rounded-full px-3 py-1 min-w-20">
          Batal
        </button>
      </div>
      <div className="flex flex-col mt-12 w-[90%] gap-2">
        {data.map((item, index) => (
          <TransactionProductCard data={item} key={index} />
        ))}
      </div>
      <BottomBar />
    </main>
  );
}
