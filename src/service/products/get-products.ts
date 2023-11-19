import axios from "axios";
import { PRODUCT_CONTROLLER } from "..";
import { Query, Product } from "@/interfaces";

export async function getProducts(query?: Query): Promise<Product[]> {
  const { data } = await axios.get(PRODUCT_CONTROLLER, {
    params: query,
  });
  return data?.map((item: Product) => ({ ...item, key: item.id }));
}
