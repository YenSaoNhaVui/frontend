import { PRODUCT_CONTROLLER } from "..";
import axiosInstance from "../axios-instance";

export async function updateHighlight(id: number, highlight: boolean) {
  const { status } = await axiosInstance.patch(PRODUCT_CONTROLLER + "/highlight/" + id, { highlight });
  return status;
}

export async function updateHidden(id: number, isDisplay: boolean) {
  const { status } = await axiosInstance.patch(PRODUCT_CONTROLLER + "/hidden/" + id, { isDisplay });
  return status;
}
