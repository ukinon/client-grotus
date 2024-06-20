import { getWishlists } from "@/apis/wishlist";
import { useQuery } from "@tanstack/react-query";

export const useGetWishlists = ({
  id,
  query,
}: {
  id: number;
  query: string;
}) => {
  const {
    data: wishlistData,
    isLoading: wishlistLoading,
    isError: wishlistError,
    error: wishlistErrorData,
  } = useQuery({
    queryFn: async () =>
      await getWishlists({
        id: id,
        query: query,
      }),
    staleTime: Infinity,
    queryKey: ["get-wishlists", query],
  });

  return {
    wishlistData,
    wishlistLoading,
    wishlistError,
    wishlistErrorData,
  };
};
