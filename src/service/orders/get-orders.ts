import { Query, Order } from "@/interfaces";
import { ORDERS_CONTROLLER } from ".";
import axiosInstance from "../axios-instance";

export async function getOrders(query?: Query): Promise<Order[]> {
  const { data } = await axiosInstance.get(ORDERS_CONTROLLER, {
    params: query,
  });
  return data?.map((item: Order) => ({ ...item, key: item.id }));
}
