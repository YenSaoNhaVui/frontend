import { Category } from "@/interfaces";
import { CATEGORY_CONTROLLER } from ".";
import axiosInstance from "../axios-instance";

export async function updateCategory(id: number, title: string) {
  const { status } = await axiosInstance.patch(CATEGORY_CONTROLLER + "/" + id, {
    title,
  });
  return status;
}

export async function updateCategoryOrder(categories: Category[]) {
  const { status } = await axiosInstance.patch(CATEGORY_CONTROLLER + "/update-order", categories);
  return status;
}
