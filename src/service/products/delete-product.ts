import { PRODUCT_CONTROLLER } from "..";
import axiosInstance from "../axios-instance";

export async function deleteProduct(id: number): Promise<void> {
  await axiosInstance.delete(PRODUCT_CONTROLLER + "/" + id);
}
