import { getProducts } from "@/apis/product";
import { useQuery } from "@tanstack/react-query";

export const useGetProducts = (query: string) => {
  const {
    data: productData,
    isLoading: productLoading,
    isError: productError,
    error: productErrorData,
    refetch: refetchProduct,
  } = useQuery({
    queryFn: async () => await getProducts(query),
    staleTime: Infinity,
    queryKey: ["get-products", query],
  });

  return {
    productData,
    productLoading,
    productError,
    productErrorData,
    refetchProduct,
  };
};
