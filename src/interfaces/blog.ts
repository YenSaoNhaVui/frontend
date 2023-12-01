import { UploadFile } from "antd";
import { NamePath } from "antd/es/form/interface";

export interface Blog {
  key?: string;
  id: number;
  createdAt: Date;
  title: string;
  description: string;
  thumbnail: string | string[] | UploadFile[];
  details: object | string;
}
