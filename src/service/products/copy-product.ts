import { PRODUCT_CONTROLLER } from "..";
import axiosInstance from "../axios-instance";

export async function copyProduct(id: number) {
  const { status, data } = await axiosInstance.post(PRODUCT_CONTROLLER + "/copy/" + id);
  return { status, data };
}
