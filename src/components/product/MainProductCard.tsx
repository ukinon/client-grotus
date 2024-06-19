"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatToIDR } from "@/lib/formatToIDR";
import { Product } from "@/types/Product";
import { StarFilledIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

type Props = {
  data: Product;
  className?: string;
};
export default function MainProductCard({ data, className }: Props) {
  return (
    <Card className={`${className} w-[175px]`}>
      <Link
        href={{
          pathname: `/product/${data.id}`,
        }}
      >
        <CardContent className="flex flex-col gap-2 items-start justify-center p-3 bg-white border border-zinc-300 shadow-sm rounded-xl w-full">
          <Image
            src={data.image as string}
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
              {data.rating}
              {`(${data.ratingCount})`}
            </div>
          </div>
          <p className="text-[0.7rem] text-zinc-400 line-clamp-1 overflow-hidden">
            {data.description}
          </p>
          <p className=" font-bold text-black text-sm">
            {formatToIDR(data.price || 0)}
          </p>

          <Button
            className="w-1/2 h-1/6 text-[0.6rem] self-end bg-primary-600 text-white mt-2"
            onClick={(e) => e.preventDefault()}
          >
            <span className="text-sm mr-1">+</span> Keranjang
          </Button>
        </CardContent>
      </Link>
    </Card>
  );
}
