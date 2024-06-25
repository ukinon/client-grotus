import Image from "next/image";
import { formatToIDR } from "@/lib/formatToIDR";
import { Cart } from "@/types/Cart";

type Props = {
  data: Cart;
};

export default function CheckoutProductDetail({ data }: Props) {
  return (
    <div className="flex justify-between p-3 rounded-lg border-zinc-300 w-full">
      <div className="flex flex-row gap-3 w-full">
        <Image
          src={
            (data?.product?.photo as string) ||
            "https://via.placeholder.com/150"
          }
          width={50}
          height={50}
          alt="product image"
          className="w-1/5 aspect-square rounded-lg"
        />
        <div className="flex flex-col gap-2 w-full">
          <div className="flex justify-between">
            <h1 className="font-bold text-xs line-clamp-1">
              {data?.product.name}
            </h1>
            <p className="font-bold text-xs">x{data?.amount}</p>
          </div>
          <p className=" font-bold text-xs">
            {formatToIDR(data?.product.price as number)}
          </p>
        </div>
      </div>
    </div>
  );
}
