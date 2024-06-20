import { axiosInstance } from "@/lib/axios";

export async function getProducts(query: string) {
  const response = await axiosInstance.get(`/products${query}`);
  return response.data;
}

export async function getProduct(id: number) {
  const response = await axiosInstance.get(`/products/${id}`);
  return response.data;
}
export async function addProductToCart({
  id,
  amount,
}: {
  id: number;
  amount: number;
}) {
  const response = await axiosInstance.post(`/products/${id}/cart`, {
    amount: amount,
  });
  return response.data;
}
export async function addProductToWishlist({ id }: { id: number }) {
  const response = await axiosInstance.post(`/products/${id}/wishlist`);
  return response.data;
}
