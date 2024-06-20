import {
  addProductToCart,
  addProductToWishlist,
  getProduct,
  getProducts,
} from "@/apis/product";
import { toast } from "@/components/ui/use-toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

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
export const useGetProduct = (id: number) => {
  const {
    data: productData,
    isLoading: productLoading,
    isError: productError,
    error: productErrorData,
    refetch: refetchProduct,
  } = useQuery({
    queryFn: async () => await getProduct(id),
    staleTime: Infinity,
    queryKey: ["get-product", id],
  });

  return {
    productData,
    productLoading,
    productError,
    productErrorData,
    refetchProduct,
  };
};

export const useAddToCart = ({
  id,
  amount,
}: {
  id: number;
  amount: number;
}) => {
  const queryClient = useQueryClient();
  const {
    mutateAsync: addToCartMutation,
    data: addToCartData,
    isPending: addToCartIsPending,
    error: addToCartError,
    isSuccess: addToCartIsSuccess,
  } = useMutation({
    mutationFn: async () =>
      await addProductToCart({
        id: id,
        amount: amount,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-carts"] });
      toast({
        title: "Yay!",
        description: "Berhasil tambah ke keranjang",
      });
    },
    onError: () => {
      toast({
        title: "Oops!",
        description: "Gagal tambah ke keranjang",
        variant: "destructive",
      });
    },
  });

  return {
    addToCartMutation,
    addToCartData,
    addToCartIsPending,
    addToCartError,
    addToCartIsSuccess,
  };
};
export const useAddToWishlist = ({ id }: { id: number }) => {
  const queryClient = useQueryClient();
  const {
    mutateAsync: addToWishlistMutation,
    data: addToWishlistData,
    isPending: addToWishlistIsPending,
    error: addToWishlistError,
    isSuccess: addToWishlistIsSuccess,
  } = useMutation({
    mutationFn: async () =>
      await addProductToWishlist({
        id: id,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-wishlists"] });
      toast({
        title: "Yay!",
        description: "Berhasil tambah ke wishlist",
      });
    },
    onError: () => {
      toast({
        title: "Oops!",
        description: "Gagal tambah ke wishlist",
        variant: "destructive",
      });
    },
  });

  return {
    addToWishlistMutation,
    addToWishlistData,
    addToWishlistIsPending,
    addToWishlistError,
    addToWishlistIsSuccess,
  };
};
