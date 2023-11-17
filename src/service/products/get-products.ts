import { PRODUCT_CONTROLLER, axiosInstance } from "..";
import { Product as Product, Query } from "../../interfaces";

export async function getProducts(query?: Query): Promise<Product[]> {
  const { data } = await axiosInstance().get(PRODUCT_CONTROLLER, {
    params: query,
  });
  return data?.map((item: Product) => ({ ...item, key: item.id }));
}
