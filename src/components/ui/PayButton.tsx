import React from "react";
import { Button } from "./button";
import { usePayTransaction } from "@/hooks/transaction";

export default function PayButton({ id }: { id: number }) {
  const { payTransactionMutation, payTransactionPending } = usePayTransaction();

  const handlePay = () => {
    payTransactionMutation(id);
  };
  return (
    <Button
      className=" bg-primary-500 text-white text-xs w-full"
      onClick={handlePay}
      disabled={payTransactionPending}
    >
      Bayar
    </Button>
  );
}
