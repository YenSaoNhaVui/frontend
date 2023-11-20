import { Blog } from "@/interfaces";
import axiosInstance from "../axios-instance";
import { BLOGS_CONTROLLER } from ".";

export async function createBlog(blog: Blog) {
  const { status } = await axiosInstance.post(BLOGS_CONTROLLER, blog);
  return status;
}
