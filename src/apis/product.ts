import { axiosInstance } from "@/lib/axios";

export async function getProducts(query: string) {
  const response = await axiosInstance.get(`/products${"?" + query}`);
  return response.data;
}

export async function getProduct(id: number) {
  console.log(id);
  const response = await axiosInstance.get(`/products/${id}`);
  return response.data;
}
