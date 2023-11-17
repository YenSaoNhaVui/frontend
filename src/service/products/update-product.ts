import { Product } from "@/interfaces";
import { axiosInstance, PRODUCT_CONTROLLER } from "..";

export async function updateProduct(id: number, product: Omit<Product, "id">) {
  const { status } = await axiosInstance().patch(
    PRODUCT_CONTROLLER + "/" + id,
    product,
  );
  return status;
}
