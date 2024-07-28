import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useGetNutritions } from "@/hooks/nutrition";

export default function CategoriesFilter() {
  const { nutritionData } = useGetNutritions({
    query: "?perPage=1000000000",
  });
  const params = useSearchParams();
  const router = useRouter();

  const filter = params.get("filter[nutrition]");

  const handleFilterClick = (filterVal: string) => {
    const currentParams = new URLSearchParams(params.toString());
    if (filterVal === currentParams.get("filter[nutrition]")) {
      currentParams.delete("filter[nutrition]", filterVal);
    } else {
      currentParams.set("filter[nutrition]", filterVal);
    }
    router.push(`?${currentParams.toString()}`);
  };

  return (
    <div className="flex flex-col gap-4 pb-3 pt-6 w-[100%] ">
      <h1 className="text-xl font-bold pl-8 md:pl-16">Jenis Nutrisi</h1>
      <div className="flex flex-row flex-wrap gap-2 items-center justify-start  md:py-1 md:px-6 pr-8 overflow-x-auto w-screen md:w-full pl-8 md:pl-16">
        {nutritionData?.data.data.map(
          (item: { id: number; name: string }, index: number) => (
            <Button
              onClick={() => handleFilterClick(item.name)}
              key={index}
              className={`flex-shrink-0 flex justify-center items-center text-center rounded-full p-2  border bg-zinc-200 hover:shadow-lg transition-shadow duration-300 ${
                filter === item.name
                  ? "border-secondary-500 text-secondary-500 bg-secondary-100"
                  : "border-zinc-400"
              }`}
            >
              <p className="text-[0.6rem] md:text-xs px-2 font-bold">
                {item.name}
              </p>
            </Button>
          )
        )}
      </div>
    </div>
  );
}
