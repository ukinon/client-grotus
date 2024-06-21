import Image from "next/image";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { formatToIDR } from "@/lib/formatToIDR";
import { FiTrash } from "react-icons/fi";
import { Cart } from "@/types/Cart";
import { useDelete } from "@/hooks/delete";

type Props = {
  data: Cart;
};

export default function CartProductCard({ data }: Props) {
  const { deleteMutation } = useDelete({
    id: data.id as number,
    path: "cart",
    queryKey: "get-carts",
  });

  const handleDelete = async () => {
    await deleteMutation();
  };

  return (
    <div className="flex justify-between p-3 rounded-lg border-zinc-300 border w-full">
      <div className="flex flex-row gap-3 w-full">
        <Image
          src={
            (data.product.image as string) || "https://via.placeholder.com/150"
          }
          width={150}
          height={150}
          alt="product image"
          className="h-full rounded-lg"
        />
        <div className="flex flex-col gap-2 w-full">
          <div className="flex justify-between">
            <h1 className="font-bold text-sm line-clamp-1">
              {data.product.name}
            </h1>

            <FiTrash onClick={() => handleDelete()} className="text-red-500" />
          </div>
          <p className=" font-bold text-zinc-400 text-sm">
            {formatToIDR(data.product.price as number)}
          </p>
          <div className="flex justify-between">
            <p className="text-[0.7rem] text-zinc-400 line-clamp-2 overflow-hidden  h-8 w-1/2">
              {data.product.description}{" "}
            </p>
            <div className="flex flex-row items-center">
              <Button className="bg-primary-500 text-lg p-2">-</Button>
              <Input
                type="number"
                defaultValue={data.amount as number}
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
