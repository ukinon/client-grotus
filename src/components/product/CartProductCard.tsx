import { Product } from "@/types/Product";
import { HeartIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { formatToIDR } from "@/lib/formatToIDR";

type Props = {
  data: Product;
};

export default function CartProductCard({ data }: Props) {
  return (
    <div className="flex justify-between p-3 rounded-lg border-zinc-300 border w-full">
      <div className="flex flex-row gap-3 w-full">
        <Image
          src={data.image as string}
          width={150}
          height={150}
          alt="product image"
          className="h-full rounded-lg"
        />
        <div className="flex flex-col gap-2 w-full">
          <div className="flex justify-between">
            <h1 className="font-bold text-sm line-clamp-1">{data.name}</h1>

            <HeartIcon className="text-red-500" />
          </div>
          <p className=" font-bold text-zinc-400 text-sm">
            {formatToIDR(data.price as number)}
          </p>
          <div className="flex justify-between">
            <p className="text-[0.7rem] text-zinc-400 line-clamp-1 overflow-hidden">
              {data.variant}{" "}
            </p>
            <div className="flex flex-row items-center">
              <Button className="bg-primary-500 text-lg p-2">-</Button>
              <Input
                type="number"
                value="1"
                className="w-10 h-10 text-center border-0 shadow-none"
              />
              <Button className="bg-primary-500 text-lg p-2">+</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
