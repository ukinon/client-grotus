import {
  addTransactions,
  getProductTransactions,
  getTransaction,
  getTransactions,
  payTransactions,
} from "@/apis/transaction";
import { toast } from "@/components/ui/use-toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useGetTransactions = (query: string) => {
  const {
    data: transactionData,
    isLoading: transactionLoading,
    isError: transactionError,
    error: transactionErrorData,
  } = useQuery({
    queryFn: async () => await getTransactions(query),
    staleTime: Infinity,
    queryKey: ["get-transactions", query],
  });

  return {
    transactionData,
    transactionLoading,
    transactionError,
    transactionErrorData,
  };
};
export const useGetTransaction = (id: number) => {
  const {
    data: transactionData,
    isLoading: transactionLoading,
    isError: transactionError,
    error: transactionErrorData,
  } = useQuery({
    queryFn: async () => await getTransaction(id),
    staleTime: Infinity,
    queryKey: ["get-transaction", id],
  });

  return {
    transactionData,
    transactionLoading,
    transactionError,
    transactionErrorData,
  };
};
export const useGetProductTransactions = (query: string) => {
  const {
    data: transactionData,
    isLoading: transactionLoading,
    isError: transactionError,
    error: transactionErrorData,
  } = useQuery({
    queryFn: async () => await getProductTransactions(query),
    staleTime: Infinity,
    queryKey: ["get-product-transactions", query],
  });

  return {
    transactionData,
    transactionLoading,
    transactionError,
    transactionErrorData,
  };
};

export const useAddTransaction = () => {
  const queryClient = useQueryClient();
  const {
    mutateAsync: addTransactionMutation,
    isPending: addTransactionPending,
    error: addTransactionError,
    isSuccess: addTransactionSuccess,
  } = useMutation({
    mutationFn: async (data: any) => await addTransactions(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-transactions"] });
      queryClient.invalidateQueries({ queryKey: ["get-carts"] });

      toast({
        title: "Yay!",
        description: "Berhasil menambahkan transaksi",
      });
    },
    onError(error) {
      if (error instanceof AxiosError)
        toast({
          title: "Oops!",
          description: error?.response?.data?.error,
          variant: "destructive",
        });
    },
  });

  return {
    addTransactionMutation,
    addTransactionPending,
    addTransactionError,
    addTransactionSuccess,
  };
};

export const usePayTransaction = () => {
  const queryClient = useQueryClient();
  const {
    mutateAsync: payTransactionMutation,
    isPending: payTransactionPending,
    error: payTransactionError,
    isSuccess: payTransactionSuccess,
  } = useMutation({
    mutationFn: async (id: number) => await payTransactions(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-transactions"] });
      queryClient.invalidateQueries({ queryKey: ["get-product-transactions"] });

      toast({
        title: "Yay!",
        description: "Berhasil membayar transaksi",
      });
    },
    onError(error) {
      if (error instanceof AxiosError)
        toast({
          title: "Oops!",
          description: error?.response?.data?.error,
          variant: "destructive",
        });
    },
  });

  return {
    payTransactionMutation,
    payTransactionPending,
    payTransactionError,
    payTransactionSuccess,
  };
};
