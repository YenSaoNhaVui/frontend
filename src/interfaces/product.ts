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
  details: [
    {
      isTable: boolean;
      title: string;
      quill: { title: string; content: string };
      details: string;
    },
  ];

  categories: Category[] | number[];
  comments: Comment[];
}
