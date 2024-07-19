import { useAddToCart } from "@/hooks/product";
import React, { MouseEvent } from "react";
import { Button } from "./button";
import { BiCartAdd } from "react-icons/bi";
import { useGetCurrentUser } from "@/hooks/auth";
import Link from "next/link";

export default function AddToCartButton({
  id,
  size,
}: {
  id: number;
  size: "sm" | "lg";
}) {
  const { addToCartMutation } = useAddToCart({
    id: id,
    amount: 1,
  });

  const handleAddToCart = async (
    e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    await addToCartMutation();
  };
  const { userData } = useGetCurrentUser();

  return (
    <>
      {userData ? (
        <Button
          className={` flex justify-center w-fit px-2 py-1 self-end shadow-none p-0`}
          onClick={(e) => handleAddToCart(e)}
          size={size}
        >
          <BiCartAdd className="text-4xl rounded-full p-1 bg-primary-500 text-white" />
        </Button>
      ) : (
        <Link
          href="/login"
          className={` flex justify-center w-fit px-2 py-1 self-end shadow-none p-0`}
        >
          <BiCartAdd className="text-4xl rounded-full p-1 bg-primary-500 text-white" />
        </Link>
      )}
    </>
  );
}
