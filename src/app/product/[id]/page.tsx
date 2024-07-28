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
import { NutritionType, Product } from "@/types/Product";
import {
  useAddToWishlist,
  useGetProduct,
  useGetProducts,
} from "@/hooks/product";
import { useParams } from "next/navigation";
import LoadingPage from "@/components/ui/LoadingPage";
import { useDelete } from "@/hooks/delete";
import { useQuery } from "@tanstack/react-query";
import { axiosInstanceML } from "@/lib/axios";
import ProductsLoading from "@/app/products/ProductsLoading";

export default function ProductPage() {
  const params = useParams();
  const { productData: data, productLoading: dataLoading } = useGetProduct(
    parseInt(params.id as string)
  );
  const { addToWishlistMutation } = useAddToWishlist({
    id: data?.data.id,
  });
  const { deleteMutation } = useDelete({
    id: data?.data.saved as number,
    path: "wishlist",
    queryKey: [["get-product", data?.data.id], ["get-wishlists"]],
  });
  const { data: products, isLoading: productsLoading } = useQuery({
    queryFn: async () => {
      const response = await axiosInstanceML.get(
        `/recommend/${data?.data.id}?limit=6`
      );
      return response.data;
    },
    queryKey: ["get-recommendations", data?.data.id],
  });

  const handleDelete = async () => {
    await deleteMutation();
  };

  const handleAddToWishlist = async () => {
    await addToWishlistMutation();
  };

  console.log(data);

  return (
    <main className="flex flex-col items-center justify-start overflow-x-hidden md:overflow-x-visible relative">
      <Navbar withBackButton withCart title="Produk" />

      {dataLoading && <LoadingPage />}
      {data && (
        <div className="w-[90%] flex flex-col md:flex-row md:gap-12">
          <div className="md:w-1/2 lg:w-2/5 md:sticky top-12 md:self-start">
            <div className="flex flex-col gap-2">
              <ProductCarousel photos={data?.data.photos} />
              <ProductBar id={data?.data.id} />
            </div>
          </div>
          <div className="md:w-1/2 lg:w-3/5">
            <div className="flex flex-col">
              <div className="flex flex-col gap-2 border-b-2 pb-3">
                <h1 className="text-xl font-bold mt-4">{data?.data.name}</h1>
                <p className="text-xl font-semibold">
                  {formatToIDR(data?.data.price as number)}
                </p>
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center gap-2">
                    <RxStarFilled className="text-yellow-500 text-xl" />
                    <p>
                      {data?.data.ratings_average.toFixed(2) || "0.00"} (
                      {data?.data.ratings_count})
                    </p>
                  </div>
                  {data?.data.saved ? (
                    <RxHeartFilled
                      onClick={() => handleDelete()}
                      className="text-red-500 text-xl"
                    />
                  ) : (
                    <RxHeart
                      onClick={() => handleAddToWishlist()}
                      className="text-red-500 text-xl"
                    />
                  )}
                </div>
              </div>

              <div className="flex flex-row gap-2 border-b-2 items-center py-4">
                {data.data.nutrition_types?.map(
                  (item: NutritionType, index: number) => (
                    <p
                      key={index}
                      className=" text-white bg-secondary-400 rounded-full w-fit px-2 py-1 text-xs"
                    >
                      {item.name}
                    </p>
                  )
                )}
              </div>

              <p className="text-sm text-gray-500 line-clamp-2 pt-4 overflow-hidden">
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

              <div className="flex flex-col gap-8 items-center w-full">
                <h1 className="text-2xl font-bold mt-4 self-start">
                  Produk Serupa
                </h1>
                <div className="flex overflow-x-hidden justify-center w-full">
                  {productsLoading && (
                    <ProductsLoading className="mt-0 md:grid-cols-3 z-10" />
                  )}
                  {products && (
                    <div className="grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-3 2xl:grid-cols-5 ">
                      {products?.map((item: Product, index: number) => (
                        <MainProductCard
                          key={index}
                          data={item}
                          className="col-span-1"
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
