import { Category } from "@/interfaces";
import { CATEGORY_CONTROLLER } from ".";
import axiosInstance from "../axios-instance";

export async function createCategory(category: Pick<Category, "title">) {
  const { status } = await axiosInstance.post(CATEGORY_CONTROLLER, category);
  return status;
}
