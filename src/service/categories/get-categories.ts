import axios from "axios";
import { Query, Category } from "@/interfaces";
import { CATEGORY_CONTROLLER } from ".";

export async function getCategorys(query?: Query): Promise<Category[]> {
  const { data } = await axios.get(CATEGORY_CONTROLLER, {
    params: query,
  });
  return data;
}
