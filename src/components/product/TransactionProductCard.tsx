import Image from "next/image";
import { RxCaretDown, RxDotsHorizontal, RxStar } from "react-icons/rx";
import { formatToIDR } from "@/lib/formatToIDR";
import { Product } from "@/types/Product";
import Link from "next/link";
import PayButton from "../ui/PayButton";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "../ui/drawer";
import CompleteButton from "../ui/CompleteButton";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import RatingProductCard from "./RatingProductCard";
import RateButton from "./RateButton";

type Props = {
  data: Product[];
  status: "Waiting For Payment" | "Shipped" | "Completed";
  total: number;
  transactionId: number;
};

export default function TransactionProductCard({
  data,
  status,
  total,
  transactionId,
}: Props) {
  return (
    <div className="flex justify-between p-3 rounded-lg border-zinc-300 border w-full">
      <div className="flex flex-col gap-3 w-full">
        <Link
          href={`/transaction/${transactionId}`}
          className="flex flex-row gap-3 w-full"
        >
          <Image
            src={
              (data[0]?.photo?.[0]?.image as string) ||
              "https://via.placeholder.com/150"
            }
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
        </Link>
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
                          (item?.photo?.[0]?.image as string) ||
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
              status == "Completed" && "bg-green-300"
            } ${status == "Shipped" && "bg-yellow-300"} ${
              status == "Waiting For Payment" && "bg-red-300"
            }`}
          >
            <p
              className={`text-[0.6rem] ${
                status == "Completed" && "text-green-700"
              } ${status == "Shipped" && "text-yellow-700"} ${
                status == "Waiting For Payment" && "text-red-800"
              }`}
            >
              {(status == "Completed" && "Selesai") ||
                (status == "Shipped" && "Dikirim") ||
                (status == "Waiting For Payment" && "Belum bayar")}
            </p>
          </div>

          <div className="flex flex-col items-end w-full">
            <p className=" font-bold  text-xs">Total Harga</p>
            <p className=" font-bold text-black text-xs">
              {formatToIDR(total as number)}
            </p>
          </div>
        </div>
        <div className="self-end w-1/3">
          {status == "Waiting For Payment" && (
            <PayButton id={transactionId as number} />
          )}
          {status == "Shipped" && (
            <AlertDialog>
              <AlertDialogTrigger className="w-full">
                <Button className=" bg-primary-500 text-white text-xs w-full">
                  Selesai
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Selesaikan transaksi?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Anda akan menyelesaikan transaksi ini
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="gap-3">
                  <AlertDialogCancel className="text-white bg-green-500">
                    Tidak
                  </AlertDialogCancel>
                  <AlertDialogAction className="text-primary-500 border-primary-500 border">
                    <CompleteButton id={transactionId as number} />
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
          {status == "Completed" && <RateButton data={data} />}
        </div>
      </div>
    </div>
  );
}
