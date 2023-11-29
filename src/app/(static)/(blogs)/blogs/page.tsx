"use client";

import CardBlog from "@/components/card-blog";
import HeaderBlog from "../header-blog";
import { Pagination } from "antd";
import useAsync from "@/hooks/use-async";
import { Blog } from "@/interfaces";
import { getBlogs } from "@/service";

export default function BlogsPage() {
  const { data } = useAsync<Blog[]>(() =>
    getBlogs({
      take: 7,
    })
  );
  return (
    <section className="bg-cover bg-no-repeat mt-6 lg:pb-7 ">
      <div className="xl:max-w-[1280px] xl:mx-auto sm:mx-8 mx-4">
        <HeaderBlog />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-4 gap-y-6 mt-6">
          {data && data?.map((blog) => <CardBlog key={blog?.id} blog={blog} />)}
        </div>
        <div className="my-4 flex justify-end">
          <Pagination defaultCurrent={1} total={data ? data?.length + 1 : 0} pageSize={6} />
        </div>
      </div>
    </section>
  );
}
