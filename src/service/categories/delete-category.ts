import axios from "axios";
import { CATEGORY_CONTROLLER } from ".";

export async function deleteCategory(id: number): Promise<void> {
  await axios.delete(CATEGORY_CONTROLLER + "/" + id);
}
