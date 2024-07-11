import { axiosInstance } from "@/lib/axios";

export async function getCarts({ id, query }: { id: number; query: string }) {
  const response = await axiosInstance.get(`/users/${id}/cart${query}`);
  return response.data;
}

export async function updateCartItem({ id, amount }: {id: number, amount: number}) {
  const response = await axiosInstance.put(`/cart/${id}`, {
    amount: amount,
  });
  return response.data;
}
