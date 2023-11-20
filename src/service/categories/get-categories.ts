import { Query, Category } from "@/interfaces";
import { CATEGORY_CONTROLLER } from ".";
import axiosInstance from "../axios-instance";

export async function getCategorys(query?: Query): Promise<Category[]> {
  const { data } = await axiosInstance.get(CATEGORY_CONTROLLER, {
    params: query,
  });
  return data;
}
