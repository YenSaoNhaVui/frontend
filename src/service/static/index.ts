import { StaticData } from "@/interfaces";
import axiosInstance from "../axios-instance";

export const STATIC_CONTROLLER = "/static";

export async function getStatic() {
  const { data } = await axiosInstance.get(STATIC_CONTROLLER);
  return data;
}
export async function setStatic(staticData: StaticData) {
  const { data } = await axiosInstance.put(STATIC_CONTROLLER, { data: staticData });
  return data;
}
