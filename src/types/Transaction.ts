import { Product } from "./Product";

export type Transaction = {
  product?: Product;
  status?: "Berlangsung" | "Selesai" | "Batal";
  quantity?: number;
  total?: number;
};
