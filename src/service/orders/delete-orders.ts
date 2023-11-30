import { ORDERS_CONTROLLER } from ".";
import axiosInstance from "../axios-instance";

export async function deleteOrder(id: number) {
  const { status } = await axiosInstance.delete(ORDERS_CONTROLLER + "/" + id);
  return status;
}
