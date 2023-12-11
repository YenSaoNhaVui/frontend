"use client";

import CardBlog from "@/components/card-blog";
import HeaderBlog from "../header-blog";
import { Pagination } from "antd";
import useAsync from "@/hooks/use-async";
import { Blog } from "@/interfaces";
import { getBlogs } from "@/service";
import CardBlogLoading from "@/components/card-blog/loading";
import { useClient } from "@/hooks";
import SpinLoading from "@/components/SpinLoading";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getAnymore } from "@/utils/getAnymore";
import { unitData } from "@/utils";

export default function BlogsPage() {
  const [page, setPage] = useState<number>(1);
  const [blogs, setBlogs] = useState<Blog[] | null>(null);
  const [isFecthMore, setIsFetchMore] = useState<boolean>(true);
  const q = useSearchParams()?.get("q");
  const filter = useSearchParams()?.get("filter");
  const { data, loading, refetch } = useAsync<Blog[]>(() => getAnymore());
  const { isClient } = useClient();

  const changePage = async (e: number) => {
    setPage(e);
    if (!isFecthMore) return;
    if (blogs?.length - e * 6 <= 12) fetchProducts(blogs?.length);
  };

  const fetchProducts = async (e?: number) => {
    let option: any = { take: 30 };
    if (e) option = { ...option, skip: e };
    if (q) option = { ...option, search: q };
    if (filter) option = { ...option, order: filter == "cu-nhat" ? "asc" : "desc" };
    refetch(() => getBlogs(option));
  };

  useEffect(() => {
    setBlogs(null);
    fetchProducts();
  }, [q, filter]);
  useEffect(() => {
    if (loading) return;
    if (!data) return;
    if (data?.length < 30) setIsFetchMore(false);
    setBlogs((prev) => unitData([...(prev || []), ...data], "id") as any);
  }, [data, loading]);
  if (!isClient) return <SpinLoading />;
  return (
    <section className="bg-cover bg-no-repeat mt-6 lg:pb-7 ">
      <div className="xl:max-w-[1280px] xl:mx-auto sm:mx-8 mx-4">
        <HeaderBlog />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-4 gap-y-6 mt-6">
          {loading && blogs == null
            ? [1, 2, 3, 4, 5, 6]?.map((i) => <CardBlogLoading key={i} />)
            : blogs?.length == 0 && (
                <div className="w-full h-[400px] flex items-center justify-center lg:col-span-5 col-span-2">
                  <h1>Không tìm thấy bài viết nào</h1>
                </div>
              )}
          {blogs &&
            blogs
              ?.slice((page - 1) * 6, page * 6)
              ?.map((blog) => <CardBlog key={blog?.id} blog={blog} />)}
        </div>
        {blogs?.length != 0 && (
          <div className="my-4 flex justify-end">
            <Pagination
              defaultCurrent={1}
              total={blogs?.length}
              pageSize={6}
              onChange={(e) => changePage(e)}
            />
          </div>
        )}
      </div>
    </section>
  );
}
