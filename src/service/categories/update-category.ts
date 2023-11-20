import { Product } from "@/interfaces";
import { PRODUCT_CONTROLLER } from "..";
import axiosInstance from "../axios-instance";

export async function updateCategory(id: number, product: Omit<Product, "id">) {
  const { status } = await axiosInstance.patch(
    PRODUCT_CONTROLLER + "/" + id,
    product,
  );
  return status;
}
