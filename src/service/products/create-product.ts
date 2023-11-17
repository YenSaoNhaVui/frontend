import { axiosInstance, PRODUCT_CONTROLLER } from "..";
import { Product } from "../interfaces";

export async function createProduct(product: Product) {
  const { status } = await axiosInstance().post(PRODUCT_CONTROLLER, product);
  return status;
}
