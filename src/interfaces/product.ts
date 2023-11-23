import { UploadFile } from "antd";
import { Category } from ".";

export interface Product {
  key?: string;

  id: number;
  title: string;
  description: string;
  images: string[] | UploadFile[];

  weights: number[];

  price: number;
  listPrice: number;
  details: [{ title: string; value: object }];

  categories: Category[] | number[];
  comments: Comment[];
}
