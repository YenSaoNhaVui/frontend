import { Product } from "@/interfaces";
import { PRODUCT_CONTROLLER } from "..";
import axios from "axios";

export async function updateProduct(id: number, product: Omit<Product, "id">) {
  const { status } = await axios.patch(PRODUCT_CONTROLLER + "/" + id, product);
  return status;
}
