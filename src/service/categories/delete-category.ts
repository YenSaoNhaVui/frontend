import { CATEGORY_CONTROLLER } from ".";
import axiosInstance from "../axios-instance";

export async function deleteCategory(id: number): Promise<void> {
  await axiosInstance.delete(CATEGORY_CONTROLLER + "/" + id);
}
