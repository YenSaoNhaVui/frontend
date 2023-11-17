import { Product } from ".";

export interface Category {
  id: number;
  title: string;

  products: Product[];
}
