import { axiosInstance, PRODUCT_CONTROLLER } from "..";
import { Product } from "../interfaces";

export async function updateProduct(id: number, product: Omit<Product, "id">) {
  const { status } = await axiosInstance().patch(
    PRODUCT_CONTROLLER + "/" + id,
    product,
  );
  return status;
}
