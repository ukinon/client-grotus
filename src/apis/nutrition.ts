import { axiosInstance } from "@/lib/axios";

export async function getNutritions({ query }: { query: string }) {
  const response = await axiosInstance.get(`/nutrition-types${query}`);
  return response.data;
}
