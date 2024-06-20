import { Product } from "./Product";

export type Cart = {
  id?: number;
  product: Product;
  amount: number;
};
