import { Product } from "@/interfaces";
import { PRODUCT_CONTROLLER } from "..";
import axiosInstance from "../axios-instance";

export async function createProduct(product: Product) {
  const { status } = await axiosInstance.post(PRODUCT_CONTROLLER, product);
  return status;
}
