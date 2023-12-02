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
import { useEffect } from "react";
import { getAnymore } from "@/utils/getAnymore";

export default function BlogsPage() {
  const q = useSearchParams()?.get("q");
  const filter = useSearchParams()?.get("filter");
  const { data, loading, refetch } = useAsync<Blog[]>(() => getAnymore());
  const { isClient } = useClient();

  const fetchProducts = async (e?: number) => {
    let option: any = { take: 7 };
    if (e) option = { ...option, skip: (e - 1) * 10 };
    if (q) option = { ...option, search: q };
    if (filter) option = { ...option, order: filter == "cu-nhat" ? "asc" : "desc" };
    refetch(() => getBlogs(option));
  };

  useEffect(() => {
    fetchProducts();
  }, [q, filter]);
  if (!isClient) return <SpinLoading />;
  return (
    <section className="bg-cover bg-no-repeat mt-6 lg:pb-7 ">
      <div className="xl:max-w-[1280px] xl:mx-auto sm:mx-8 mx-4">
        <HeaderBlog />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-4 gap-y-6 mt-6">
          {loading || data == null ? (
            [1, 2, 3, 4, 5, 6]?.map((i) => <CardBlogLoading key={i} />)
          ) : data?.length == 0 ? (
            <div className="w-full h-[400px] flex items-center justify-center lg:col-span-5 col-span-2">
              <h1>Không tìm thấy bài viết nào</h1>
            </div>
          ) : (
            data?.map((blog) => <CardBlog key={blog?.id} blog={blog} />)
          )}
        </div>
        <div className="my-4 flex justify-end">
          <Pagination defaultCurrent={1} total={data ? data?.length + 1 : 0} pageSize={6} />
        </div>
      </div>
    </section>
  );
}
