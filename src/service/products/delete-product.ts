import { PRODUCT_CONTROLLER, axiosInstance } from "..";

export async function deleteProduct(id: number): Promise<void> {
  await axiosInstance().delete(PRODUCT_CONTROLLER + "/" + id);
}
