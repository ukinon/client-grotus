import { getCarts, updateCartItem } from "@/apis/cart";
import { toast } from "@/components/ui/use-toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

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

export const useUpdateCart = ({
  id,
  amount,
}: {
  id: number;
  amount: number;
}) => {
  const queryClient = useQueryClient();
  const {
    mutateAsync: updateCartMutation,
    data: updateCartData,
    isPending: updateCartIsPending,
    error: updateCartError,
    isSuccess: updateCartIsSuccess,
  } = useMutation({
    mutationFn: async () =>
      await updateCartItem({
        id: id,
        amount: amount,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-carts"] });
      toast({
        title: "Yay!",
        description: "Berhasil update ke keranjang",
      });
    },
    onError: () => {
      toast({
        title: "Oops!",
        description: "Gagal update ke keranjang",
        variant: "destructive",
      });
    },
  });

  return {
    updateCartMutation,
    updateCartData,
    updateCartIsPending,
    updateCartError,
    updateCartIsSuccess,
  };
};
