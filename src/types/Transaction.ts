import { Product } from "./Product";

export type Transaction = {
  id?: number;
  products?: Product[];
  paid_at: string;
};
