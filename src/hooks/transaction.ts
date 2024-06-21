import { getTransactions } from "@/apis/transaction";
import { useQuery } from "@tanstack/react-query";

export const useGetTransactions = (query: string) => {
  const {
    data: transactionData,
    isLoading: transactionLoading,
    isError: transactionError,
    error: transactionErrorData,
  } = useQuery({
    queryFn: async () => await getTransactions(query),
    staleTime: Infinity,
    queryKey: ["get-products", query],
  });

  return {
    transactionData,
    transactionLoading,
    transactionError,
    transactionErrorData,
  };
};
