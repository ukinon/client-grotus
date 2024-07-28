import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button } from "@/components/ui/button"; // Adjust the import based on your project structure

const sortOptions = [
  {
    label: "Nama",
    value: "name",
  },
  {
    label: "Harga",
    value: "price",
  },
  {
    label: "Rating",
    value: "rating",
  },
];

const directionOptions = [
  {
    label: "Ascending",
    value: "asc",
  },
  {
    label: "Descending",
    value: "desc",
  },
];

export default function CategoriesSort() {
  const params = useSearchParams();
  const router = useRouter();
  const filter = params.get("sortBy");
  const direction = params.get("direction") || "asc";

  useEffect(() => {
    if (!params.get("direction")) {
      const currentParams = new URLSearchParams(params.toString());
      currentParams.set("direction", "asc");
      router.replace(`?${currentParams.toString()}`);
    }
  }, [params, router]);

  const handleSortClick = (sortVal: string, directionVal: string) => {
    const currentParams = new URLSearchParams(params.toString());
    currentParams.set("sortBy", sortVal);
    currentParams.set("direction", directionVal);
    router.replace(`?${currentParams.toString()}`);
  };

  return (
    <div className="flex flex-col gap-4 pb-3 pt-6 w-[100%] ">
      <h1 className="text-xl font-bold pl-8 md:pl-16">Urutan</h1>
      <div className="flex flex-row flex-wrap gap-2 items-center justify-start md:py-1 md:px-6 pr-8 overflow-x-auto w-screen md:w-full pl-8 md:pl-16">
        {directionOptions.map((item, index: number) => (
          <Button
            className={`flex-shrink-0 flex justify-center items-center text-center rounded-full p-2 border bg-zinc-200 hover:shadow-lg transition-shadow duration-300 ${
              direction === item.value
                ? "border-secondary-500 text-secondary-500 bg-secondary-100"
                : "border-zinc-400"
            }`}
            key={index}
            onClick={() => handleSortClick(filter || "rating", item.value)}
          >
            <p className="text-[0.6rem] md:text-xs px-2 font-bold">
              {item.label}
            </p>
          </Button>
        ))}
      </div>
      <h1 className="text-xl font-bold pl-8 md:pl-16">Jenis</h1>
      <div className="flex flex-row flex-wrap gap-2 items-center justify-start md:py-1 md:px-6 pr-8 overflow-x-auto w-screen md:w-full pl-8 md:pl-16">
        {sortOptions.map((item, index: number) => (
          <Button
            className={`flex-shrink-0 flex justify-center items-center text-center rounded-full p-2 border bg-zinc-200 hover:shadow-lg transition-shadow duration-300 ${
              filter === item.value
                ? "border-secondary-500 text-secondary-500 bg-secondary-100"
                : "border-zinc-400"
            }`}
            key={index}
            onClick={() => handleSortClick(item.value, direction)}
          >
            <p className="text-[0.6rem] md:text-xs px-2 font-bold">
              {item.label}
            </p>
          </Button>
        ))}
      </div>
    </div>
  );
}
