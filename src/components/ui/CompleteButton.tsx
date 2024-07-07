import React from "react";
import { Button } from "./button";
import { useCompleteTransaction } from "@/hooks/transaction";

export default function CompleteButton({ id }: { id: number }) {
  const { completeTransactionMutation, completeTransactionPending } =
    useCompleteTransaction();

  const handleComplete = () => {
    completeTransactionMutation(id);
  };
  return (
    <Button
      className=" text-primary-500 text-xs w-full"
      onClick={handleComplete}
      disabled={completeTransactionPending}
    >
      Selesai
    </Button>
  );
}
