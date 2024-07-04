import { axiosInstance } from "@/lib/axios";

export async function getTransactions(query: string) {
  const response = await axiosInstance.get(`/transactions${query}`);
  return response.data;
}
export async function getTransaction(id: number) {
  const response = await axiosInstance.get(`/transactions/${id}`);
  return response.data;
}
export async function getProductTransactions(query: string) {
  const response = await axiosInstance.get(`/transaction-products${query}`);
  return response.data;
}

export async function addTransactions(data: any) {
  const response = await axiosInstance.post("/transactions", data);
  return response.data;
}

export async function payTransactions(id: number) {
  const response = await axiosInstance.put(`/transactions/${id}/pay`);
  return response.data;
}
