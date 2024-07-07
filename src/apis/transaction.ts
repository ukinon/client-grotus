import { axiosInstance } from "@/lib/axios";
import { Transaction } from "@/types/Transaction";

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

export async function addTransactions(data: Transaction) {
  const response = await axiosInstance.post("/transactions", data);
  return response.data;
}
export async function rateProduct(data: { id: number; rating: number }) {
  const response = await axiosInstance.put(`/transaction-products/${data.id}`, {
    rating: data.rating,
  });
  return response.data;
}

export async function payTransactions(id: number) {
  const response = await axiosInstance.put(`/transactions/${id}/pay`);
  return response.data;
}
export async function completeTransactions(id: number) {
  const response = await axiosInstance.put(`/transactions/${id}/complete`);
  return response.data;
}
