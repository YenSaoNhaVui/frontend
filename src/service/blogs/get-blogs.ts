import { Blog, Query } from "@/interfaces";
import axios from "axios";
import { BLOGS_CONTROLLER } from "..";

export async function getBlogs(query?: Query): Promise<Blog[]> {
  const { data } = await axios.get(BLOGS_CONTROLLER, {
    params: query,
  });
  return data?.map((item: Blog) => ({ ...item, key: item.id }));
}
