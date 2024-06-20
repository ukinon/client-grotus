import { axiosInstance } from "@/lib/axios";

export async function getCarts({ id, query }: { id: number; query: string }) {
  const response = await axiosInstance.get(`/users/${id}/cart${query}`);
  return response.data;
}

export async function updateCartItem(id: number, amount: number) {
  const response = await axiosInstance.put(`/carts/${id}`, {
    amount: amount,
  });
  return response.data;
}
