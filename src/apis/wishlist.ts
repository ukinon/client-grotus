import { axiosInstance } from "@/lib/axios";

export async function getWishlists({
  id,
  query,
}: {
  id: number;
  query: string;
}) {
  const response = await axiosInstance.get(`/users/${id}/wishlist${query}`);
  return response.data;
}
