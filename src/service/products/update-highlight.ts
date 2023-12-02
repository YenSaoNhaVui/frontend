import { PRODUCT_CONTROLLER } from "..";
import axiosInstance from "../axios-instance";

export async function updateHighlight(id: number, highlight: boolean) {
  const { status } = await axiosInstance.patch(PRODUCT_CONTROLLER + "/highlight/" + id, { highlight });
  return status;
}
