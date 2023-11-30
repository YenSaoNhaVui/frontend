import { ORDERS_CONTROLLER } from ".";
import axiosInstance from "../axios-instance";

export async function viewedOrder(id: number, viewed: boolean) {
  const { status } = await axiosInstance.patch(ORDERS_CONTROLLER + "/" + id, { viewed });
  return status;
}
