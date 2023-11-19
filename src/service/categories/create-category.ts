import { Category } from "@/interfaces";
import axios from "axios";
import { CATEGORY_CONTROLLER } from ".";

export async function createCategory(category: Pick<Category, "title">) {
  const { status } = await axios.post(CATEGORY_CONTROLLER, category);
  return status;
}
