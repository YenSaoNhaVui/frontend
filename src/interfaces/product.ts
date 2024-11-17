import { UploadFile } from "antd";
import { Category, Comment } from ".";

export interface Variant {
  price: number;
  listPrice: number;
  weight: string;
}

export interface Product {
  key?: string;

  id: number;
  title: string;
  description: string;
  images: string[] | UploadFile[];

  highlight: boolean;

  prices: Variant[]; // Đặt tên lỗi xíu  :))
  isDisplay: boolean;
  details: [
    {
      isTable: boolean;
      title: string;
      table: {
        title: string;
        content: string;
      }[];
      quill: { title: string; content: string };
      details: string;
    }
  ];

  categories: Category[] | number[];
  comments: Comment[];
}
