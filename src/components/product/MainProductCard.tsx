"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatToIDR } from "@/lib/formatToIDR";
import { Product } from "@/types/Product";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { count } from "console";
import Image from "next/image";
import Link from "next/link";
import { BiCartAdd } from "react-icons/bi";
import AddToCartButton from "../ui/AddToCartButton";

type Props = {
  data: Product;
  className?: string;
};
export default function MainProductCard({ data, className }: Props) {
  console.log(data);
  return (
    <Card className={`${className} w-[180px]`}>
      <Link
        href={{
          pathname: `/product/${data.id}`,
        }}
      >
        <CardContent className="flex flex-col gap-2 items-start justify-center p-3 bg-white border border-zinc-300 shadow-sm rounded-xl w-full">
          <Image
            src={(data.image as string) || "https://via.placeholder.com/150"}
            width={150}
            height={150}
            alt="product image"
            className="w-full rounded-lg"
          />
          <div className="flex justify-between items-center w-full">
            <h1 className="font-bold text-sm w-full line-clamp-1">
              {data.name}
            </h1>
            <div className="flex flex-row gap-1 items-center text-[0.6rem]">
              <StarFilledIcon className="text-yellow-400" />
              {data.rating || 0}
              {data.ratingCount ? `(${data.ratingCount})` : "(0)"}
            </div>
          </div>
          <p className="text-[0.7rem] text-zinc-400 line-clamp-1 overflow-hidden">
            {data.description}
          </p>
          <div className="flex justify-between items-start w-full gap-1">
            <div className="flex flex-col gap-2 w-full">
              <p className=" font-bold text-black text-sm">
                {formatToIDR(data.price || 0)}
              </p>
              <div className="flex flex-row gap-0.5">
                <p className=" text-[0.6rem] text-white bg-secondary-400 rounded-full w-fit px-2 max-w-[65%] line-clamp-1">
                  {data.nutrition_types &&
                    data.nutrition_types.length > 0 &&
                    data.nutrition_types[0].name}
                </p>

                {data.nutrition_types && data.nutrition_types.length > 1 && (
                  <p className=" text-[0.6rem] text-white bg-secondary-400 rounded-full w-fit px-1.5">
                    {" "}
                    + {data.nutrition_types.length - 1}
                  </p>
                )}
              </div>
            </div>

            <AddToCartButton id={data.id as number} size="sm" />
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
