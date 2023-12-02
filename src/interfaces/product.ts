import { UploadFile } from "antd";
import { Category } from ".";

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

export interface Comment {
  id: number;
  userName: string;
  userPhone: string;
  userComment: string;
  userStar: number;
  createdAt: string;
  productId: number;
}
