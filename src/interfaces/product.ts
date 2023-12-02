import { UploadFile } from "antd";
import { Category, Comment } from ".";

export interface Variant {
  price: number;
  listPrice: number;
  weight: number;
}

export interface Product {
  key?: string;

  id: number;
  title: string;
  description: string;
  images: string[] | UploadFile[];

  highlight: boolean;

  prices: Variant[]; // Đặt tên lỗi xíu  :))

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
    },
  ];

  categories: Category[] | number[];
  comments: Comment[];
}
