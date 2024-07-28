import Image from "next/image";
import { formatToIDR } from "@/lib/formatToIDR";
import { TransactionProduct } from "@/types/Transaction";
import Link from "next/link";

type Props = {
  data: TransactionProduct;
};

export default function TransactionProductDetail({ data }: Props) {
  return (
    <div className="flex justify-between p-3 rounded-lg border-zinc-300 w-full">
      <Link
        href={`/product/${data.product_id}`}
        className="flex flex-row gap-3 w-full"
      >
        <Image
          src={
            (data?.photo?.[0]?.image as string) ||
            "https://via.placeholder.com/150"
          }
          width={50}
          height={50}
          alt="product image"
          className="w-1/5 md:w-1/12 aspect-square rounded-lg"
        />
        <div className="flex flex-col gap-2 w-full">
          <div className="flex justify-between">
            <h1 className="font-bold text-xs line-clamp-1">{data?.name}</h1>
            <p className="font-bold text-xs">x{data?.amount}</p>
          </div>
          <p className=" font-bold text-xs">
            {formatToIDR(data?.price as number)}
          </p>
        </div>
      </Link>
    </div>
  );
}
