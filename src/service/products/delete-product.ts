import axios from "axios";
import { PRODUCT_CONTROLLER } from "..";

export async function deleteProduct(id: number): Promise<void> {
  await axios.delete(PRODUCT_CONTROLLER + "/" + id);
}
