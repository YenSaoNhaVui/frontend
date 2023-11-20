import { UploadFile } from "antd";
import { Category } from ".";

export interface Product {
  key?: string;

  id: number;
  title: string;
  description: string;
  images: string[] | UploadFile[];
  weights: object;
  price: number;
  listPrice: number;
  details: object;

  categories: Category[] | number[];
  // comments   Comment[]
}
