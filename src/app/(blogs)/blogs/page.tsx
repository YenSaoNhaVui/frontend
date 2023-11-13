"use client";

import CardBlog from "@/components/card-blog";
import HeaderBlog from "../header-blog";
import { Pagination } from "antd";

export default function BlogsPage() {
  return (
    <section className="bg-cover bg-no-repeat pt-[75px] pb-7">
      <div className="xl:max-w-[1280px] xl:mx-auto sm:mx-8 mx-4">
        <HeaderBlog />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-4 gap-y-6 mt-6">
          <CardBlog />
          <CardBlog />
          <CardBlog />
          <CardBlog />
          <CardBlog />
          <CardBlog />
        </div>
        <div className="my-4 flex justify-end">
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
    </section>
  );
}
