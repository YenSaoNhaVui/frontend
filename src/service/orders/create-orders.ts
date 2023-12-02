import { Order } from "@/interfaces";
import { ORDERS_CONTROLLER } from ".";
import axiosInstance from "../axios-instance";

interface CreateOrder extends Pick<Order, "name" | "totalPrice" | "identity" | "products"> {}

export async function createOrder(order: CreateOrder) {
  const { status } = await axiosInstance.post(ORDERS_CONTROLLER, {
    ...order,
  });
  return status;
}
