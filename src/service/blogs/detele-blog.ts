import { BLOGS_CONTROLLER } from ".";
import axiosInstance from "../axios-instance";

export async function deleteBlog(id: number): Promise<void> {
  await axiosInstance.delete(BLOGS_CONTROLLER + "/" + id);
}
