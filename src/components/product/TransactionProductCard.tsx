import Image from "next/image";
import { RxDotsHorizontal, RxStar } from "react-icons/rx";
import { Transaction } from "@/types/Transaction";
import { formatToIDR } from "@/lib/formatToIDR";

type Props = {
  data: Transaction;
};

export default function TransactionProductCard({ data }: Props) {
  return (
    <div className="flex justify-between p-3 rounded-lg border-zinc-300 border w-full">
      <div className="flex flex-col gap-3 w-full">
        <div className="flex flex-row gap-3 w-full">
          <Image
            src={data.product?.image as string}
            width={50}
            height={50}
            alt="product image"
            className="h-full rounded-lg"
          />
          <div className="flex flex-col gap-2 w-full">
            <div className="flex justify-between">
              <h1 className="font-bold text-xs line-clamp-1">
                {data.product?.name}
              </h1>

              <RxDotsHorizontal />
            </div>
            <p className=" font-bold text-zinc-400 text-[0.6rem]">
              Jumlah: {data.quantity}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-end w-full">
          <div
            className={`flex justify-center items-center  h-6 rounded-full w-24 ${
              data.status == "Berlangsung" && "bg-yellow-300"
            } ${data.status == "Selesai" && "bg-green-300"} ${
              data.status == "Batal" && "bg-red-300"
            }`}
          >
            <p
              className={`text-[0.6rem] ${
                data.status == "Berlangsung" && "text-yellow-700"
              } ${data.status == "Selesai" && "text-green-700"} ${
                data.status == "Batal" && "text-red-800"
              }`}
            >
              {data.status}
            </p>
          </div>

          <div className="flex flex-col items-end w-full">
            <p className=" font-bold  text-xs">Total Harga</p>
            <p className=" font-bold text-black text-xs">
              {formatToIDR(data.total as number)}
            </p>
          </div>
        </div>
        {data.status == "Batal" && (
          <div className="flex w-full">
            <p className=" font-bold  text-xs">
              Alasan: Terlalu dini untuk menilai
            </p>
          </div>
        )}
        {data.status == "Selesai" && (
          <div className="flex flex-row justify-between items-end w-full">
            <p className=" font-bold  text-xs">Ulasan</p>
            <div className="flex flex-row gap-1 items-center text-lg">
              <RxStar className="text-yellow-400" />
              <RxStar className="text-yellow-400" />
              <RxStar className="text-yellow-400" />
              <RxStar className="text-yellow-400" />
              <RxStar className="text-yellow-400" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
