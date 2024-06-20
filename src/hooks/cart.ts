import { getCarts } from "@/apis/cart";
import { useQuery } from "@tanstack/react-query";

export const useGetCarts = ({ id, query }: { id: number; query: string }) => {
  const {
    data: cartData,
    isLoading: cartLoading,
    isError: cartError,
    error: cartErrorData,
  } = useQuery({
    queryFn: async () =>
      await getCarts({
        id: id,
        query: query,
      }),
    staleTime: Infinity,
    queryKey: ["get-carts", query],
  });

  return {
    cartData,
    cartLoading,
    cartError,
    cartErrorData,
  };
};
