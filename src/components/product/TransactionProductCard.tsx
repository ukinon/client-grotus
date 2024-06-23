import Image from "next/image";
import { RxCaretDown, RxDotsHorizontal, RxStar } from "react-icons/rx";
import { Transaction } from "@/types/Transaction";
import { formatToIDR } from "@/lib/formatToIDR";
import { Product } from "@/types/Product";
import Link from "next/link";
import { Button } from "../ui/button";
import PayButton from "../ui/PayButton";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";

type Props = {
  data: Product[];
  status: string;
  total: number;
  transactionId: number;
};

export default function TransactionProductCard({
  data,
  status,
  total,
  transactionId,
}: Props) {
  console.log(data);
  return (
    <div className="flex justify-between p-3 rounded-lg border-zinc-300 border w-full">
      <div className="flex flex-col gap-3 w-full">
        <div className="flex flex-row gap-3 w-full">
          <Image
            src={(data[0].photo as string) || "https://via.placeholder.com/150"}
            width={50}
            height={50}
            alt="product image"
            className="h-full rounded-lg"
          />
          <div className="flex flex-col gap-2 w-full">
            <div className="flex justify-between">
              <h1 className="font-bold text-xs line-clamp-1">{data[0].name}</h1>

              <RxDotsHorizontal />
            </div>
            <p className=" font-bold text-zinc-400 text-[0.6rem] w-fit">
              Jumlah: {data[0].amount}
            </p>
          </div>
        </div>
        {data.length > 1 && (
          <Collapsible>
            <CollapsibleTrigger className="text-xs w-full  flex flex-col justify-between">
              <div className="flex flex-row w-full justify-between mb-3 items-center">
                <p> +{data.length - 1} Lainnya</p>
                <RxCaretDown className="text-xl" />
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-3">
              {data.map(
                (item, index) =>
                  index != 0 && (
                    <div className="flex flex-row gap-3 w-full" key={index}>
                      <Image
                        src={
                          (item?.photo as string) ||
                          "https://via.placeholder.com/150"
                        }
                        width={50}
                        height={50}
                        alt="product image"
                        className="h-full rounded-lg"
                      />
                      <div className="flex flex-col gap-2 w-full">
                        <div className="flex justify-between">
                          <h1 className="font-bold text-xs line-clamp-1">
                            {item?.name}
                          </h1>
                        </div>
                        <p className=" font-bold text-zinc-400 text-[0.6rem]">
                          Jumlah: {item?.amount}
                        </p>
                      </div>
                    </div>
                  )
              )}
            </CollapsibleContent>
          </Collapsible>
        )}

        <div className="flex justify-between items-end w-full">
          <div
            className={`flex justify-center items-center  h-6 rounded-full w-24  ${
              status == "Sudah bayar" && "bg-green-300"
            } ${status == "Belum bayar" && "bg-red-300"}`}
          >
            <p
              className={`text-[0.6rem] ${
                status == "Sudah bayar" && "text-green-700"
              } ${status == "Belum bayar" && "text-red-800"}`}
            >
              {status}
            </p>
          </div>

          <div className="flex flex-col items-end w-full">
            <p className=" font-bold  text-xs">Total Harga</p>
            <p className=" font-bold text-black text-xs">
              {formatToIDR(total as number)}
            </p>
          </div>
        </div>

        {status == "Belum bayar" && <PayButton id={transactionId as number} />}
        {status == "Sudah bayar" && (
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
