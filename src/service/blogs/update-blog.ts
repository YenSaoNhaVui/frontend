import { Blog } from "@/interfaces";
import { BLOGS_CONTROLLER } from "..";
import axiosInstance from "../axios-instance";

export async function updateBlog(id: number, blog: Omit<Blog, "id">) {
  const { status } = await axiosInstance.patch(BLOGS_CONTROLLER + "/" + id, blog);
  return status;
}
