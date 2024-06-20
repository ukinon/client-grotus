"use client";
import { ProductCarousel } from "@/components/product/ProductCarousel";
import ProductBar from "@/components/layout/ProductBar";
import { formatToIDR } from "@/lib/formatToIDR";
import Navbar from "@/components/layout/Navbar";
import { RxHeart, RxHeartFilled, RxStarFilled } from "react-icons/rx";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import MainProductCard from "@/components/product/MainProductCard";
import { Product } from "@/types/Product";
import {
  useAddToWishlist,
  useGetProduct,
  useGetProducts,
} from "@/hooks/product";
import { useParams } from "next/navigation";
import LoadingPage from "@/components/ui/LoadingPage";
import { useDelete } from "@/hooks/delete";

export default function ProductPage() {
  const params = useParams();
  const { productData } = useGetProducts("?perPage=4");
  const { productData: data, productLoading: dataLoading } = useGetProduct(
    parseInt(params.id as string)
  );
  const { addToWishlistMutation } = useAddToWishlist({
    id: data?.data.id,
  });
  const { deleteMutation } = useDelete({
    id: data?.data.id as number,
    path: "wishlist",
    queryKey: "get-wishlists",
  });

  const handleDelete = async () => {
    await deleteMutation();
  };

  const handleAddToWishlist = async () => {
    await addToWishlistMutation();
  };
  return (
    <main className="flex  flex-col items-center justify-start overflow-x-hidden">
      <Navbar withBackButton withCart title="Product" />

      {dataLoading && <LoadingPage />}
      {data && (
        <>
          <div className="flex flex-col gap-4 w-[90%] ">
            <ProductCarousel />
            <div className="flex flex-col gap-1 border-b-2 pb-3">
              <h1 className="text-2xl font-bold mt-4">{data?.data.name}</h1>
              <p className="text-lg font-semibold">
                {formatToIDR(data?.data.price as number)}
              </p>
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-2">
                  <RxStarFilled className="text-yellow-500 text-lg" />
                  <p>{data?.data.rating || 0}</p>
                </div>
                {data?.data.saved ? (
                  <RxHeartFilled
                    onClick={() => handleDelete()}
                    className="text-red-500 text-lg"
                  />
                ) : (
                  <RxHeart
                    onClick={() => handleAddToWishlist()}
                    className="text-red-500 text-lg"
                  />
                )}
              </div>
            </div>

            <p className="text-sm text-gray-500 line-clamp-3">
              {data?.data.description}
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
                  {data?.data.description}
                </p>
              </DrawerContent>
            </Drawer>

            <div className="flex flex-col gap-8 items-center">
              <h1 className="text-2xl font-bold mt-4 self-start">
                Produk Lainnya
              </h1>
              <div className="flex overflow-x-auto w-full">
                <div className="grid grid-cols-2 flex-wrap gap-2 justify-center">
                  {productData?.data.data.map(
                    (item: Product, index: number) => (
                      <MainProductCard
                        key={index}
                        data={item}
                        className="min-w-[150px] col-span-1"
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
          <ProductBar id={data?.data.id} />
        </>
      )}
    </main>
  );
}
