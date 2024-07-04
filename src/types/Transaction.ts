import { Product } from "./Product";

export type TransactionProduct = {
  id: number;
  amount: number;
  price: number;
  name: string;
  photo: string;
};

export type Transaction = {
  id?: number;
  products?: TransactionProduct[];
  paid_at: string;
};
