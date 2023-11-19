import { Product } from "@/interfaces";
import { PRODUCT_CONTROLLER } from "..";
import axios from "axios";

export async function createProduct(product: Product) {
  const { status } = await axios.post(PRODUCT_CONTROLLER, product);
  return status;
}
