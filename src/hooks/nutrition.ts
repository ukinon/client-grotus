import { getNutritions } from "@/apis/nutrition";
import { useQuery } from "@tanstack/react-query";

export const useGetNutritions = ({ query }: { query: string }) => {
  const {
    data: nutritionData,
    isLoading: nutritionLoading,
    isError: nutritionError,
    error: nutritionErrorData,
  } = useQuery({
    queryFn: async () =>
      await getNutritions({
        query: query,
      }),
    staleTime: Infinity,
    queryKey: ["get-nutritions", query],
  });

  return {
    nutritionData,
    nutritionLoading,
    nutritionError,
    nutritionErrorData,
  };
};
