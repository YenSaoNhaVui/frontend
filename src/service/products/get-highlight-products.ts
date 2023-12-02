import { Product, Query } from "@/interfaces";
import { PRODUCT_CONTROLLER } from "..";
import axiosInstance from "../axios-instance";

export async function getHighlightProducts(query?: Query): Promise<Product[]> {
  const { data } = await axiosInstance.get(PRODUCT_CONTROLLER + "/highlights", {
    params: query,
  });
  return data?.map((item: Product) => ({ ...item, key: item.id }));
}
