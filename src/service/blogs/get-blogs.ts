import { Blog, Query } from "@/interfaces";
import { BLOGS_CONTROLLER } from "..";
import axiosInstance from "../axios-instance";

export async function getBlogs(query?: Query): Promise<Blog[]> {
  const { data } = await axiosInstance.get(BLOGS_CONTROLLER, {
    params: query,
  });
  return data?.map((item: Blog) => ({ ...item, key: item.id }));
}
