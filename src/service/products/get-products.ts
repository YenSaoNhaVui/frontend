import { Product, Query } from "@/interfaces";
import { PRODUCT_CONTROLLER } from "..";
import axiosInstance from "../axios-instance";

export async function getProducts(query?: Query): Promise<Product[]> {
  const { data } = await axiosInstance.get(PRODUCT_CONTROLLER, {
    params: query,
  });
  return data?.map((item: Product) => ({ ...item, key: item.id }));
}

export async function getProductsAll(query?: Query): Promise<Product[]> {
  const { data } = await axiosInstance.get(PRODUCT_CONTROLLER + "/admin", {
    params: query,
  });
  return data?.map((item: Product) => ({ ...item, key: item.id }));
}

export async function getProductsById(id: string): Promise<Product> {
  const { data } = await axiosInstance.get(PRODUCT_CONTROLLER + `/${id}`);
  return data;
}
