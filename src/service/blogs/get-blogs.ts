import { Query, Blog } from "@/interfaces";
import { BLOGS_CONTROLLER, axiosInstance } from "..";

export async function getBlogs(query?: Query): Promise<Blog[]> {
  const { data } = await axiosInstance().get(BLOGS_CONTROLLER, {
    params: query,
  });
  return data?.map((item: Blog) => ({ ...item, key: item.id }));
}
