import { Product } from "@/interfaces";
import { axiosInstance, PRODUCT_CONTROLLER } from "..";

export async function createProduct(product: Product) {
  const { status } = await axiosInstance().post(PRODUCT_CONTROLLER, product);
  return status;
}
