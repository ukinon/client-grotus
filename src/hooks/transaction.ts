import {
  addTransactions,
  completeTransactions,
  getProductTransactions,
  getTransaction,
  getTransactions,
  payTransactions,
  rateProduct,
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
export const useCompleteTransaction = () => {
  const queryClient = useQueryClient();
  const {
    mutateAsync: completeTransactionMutation,
    isPending: completeTransactionPending,
    error: completeTransactionError,
    isSuccess: completeTransactionSuccess,
  } = useMutation({
    mutationFn: async (id: number) => await completeTransactions(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-transactions"] });
      queryClient.invalidateQueries({ queryKey: ["get-product-transactions"] });

      toast({
        title: "Yay!",
        description: "Berhasil selesaikan transaksi",
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
    completeTransactionMutation,
    completeTransactionPending,
    completeTransactionError,
    completeTransactionSuccess,
  };
};
export const useRateProduct = () => {
  const queryClient = useQueryClient();
  const {
    mutateAsync: rateProductMutation,
    isPending: rateProductPending,
    error: rateProductError,
    isSuccess: rateProductSuccess,
  } = useMutation({
    mutationFn: async ({ id, rating }: { id: number; rating: number }) =>
      await rateProduct({ id, rating }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-transactions"] });
      queryClient.invalidateQueries({ queryKey: ["get-product-transactions"] });
      queryClient.invalidateQueries({ queryKey: ["get-products"] });
      queryClient.invalidateQueries({ queryKey: ["get-product"] });

      toast({
        title: "Yay!",
        description: "Berhasil ulas produk",
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
    rateProductMutation,
    rateProductPending,
    rateProductError,
    rateProductSuccess,
  };
};
