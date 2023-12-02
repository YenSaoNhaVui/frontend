"use client";

import BreadCrumbs from "@/components/bread-crumbs";
import CardBlog from "@/components/card-blog";
import CardBlogLoading from "@/components/card-blog/loading";
import { CalendarIcon } from "@/components/icons";
import Icon from "@/components/ui/icon";
import useAsync from "@/hooks/use-async";
import { Blog } from "@/interfaces";
import { getBlogs, getBlogsById } from "@/service";
import { cn } from "@/utils";
import axios from "axios";
import dateformat from "dateformat";
import { useEffect } from "react";

export default function BlogDetailsClient({ slug }: { slug: string }) {
  const { data, loading } = useAsync<Blog>(() => getBlogsById(slug));
  const { data: blogs, loading: loadingBlogs } = useAsync<Blog[]>(() =>
    getBlogs({
      take: 3,
    })
  );

  if (loading)
    return (
      <div className="h-[300px]">
        <h1 className="text-center">Loading...</h1>
      </div>
    );
  if (!data && !loading)
    return (
      <div className="h-[300px]">
        <h1 className="text-center">Not found</h1>
      </div>
    );
  return (
    <section className="xl:max-w-[1280px] xl:mx-auto sm:mx-8 mx-4 text-black">
      <BreadCrumbs
        linkBack="/blogs"
        titleCurrent="Cách chưng hấp tổ yến"
        titlePrev="Blog"
        className="my-[34px]"
      />
      <div className="mt-[54px] max-w-[920px] mx-auto bg-white p-[30px] rounded-[20px] mb-[45px]">
        <h3>{data?.title}</h3>
        <div className="flex gap-1 mb-4">
          <Icon size="md" className="[&_path]:!fill-neutral-5">
            <CalendarIcon />
          </Icon>
          <p className="text-body-sm-medium text-neutral-5 font-poppins-medium">
            {dateformat(data?.createdAt, "dd/mm/yyyy")}
          </p>
        </div>
        <p className="text-neutral-6 font-normal text-[20px] leading-[30px] mb-4">{data?.description}</p>
        <figure className="max-h-[500px] relative w-full rounded-lg mb-4">
          <div className="pt-[100%] overflow-hidden">
            <img
              alt={data?.title}
              src={typeof data?.thumbnail == "string" ? data?.thumbnail : (data?.thumbnail[0] as string)}
              className="absolute top-0 left-0 w-full h-full rounded-lg object-contain"
            />
          </div>
        </figure>
        <div
          className="[&_p]:font-normal [&_p]:text-[20px] [&_p]:leading-[30px] [&_p]:mb-4"
          dangerouslySetInnerHTML={{ __html: data?.details as string }}
        ></div>
      </div>
      <div className="mb-[77px]">
        <h3 className="text-center text-primary-1-7 mb-8">BÀI VIẾT LIÊN QUAN</h3>
        <div className="flex gap-4 lg:max-w-[1150px] sm:max-w-[640px] max-w-[300px] mx-auto justify-center">
          {loadingBlogs
            ? [1, 2, 3]?.map((i) => <CardBlogLoading className="flex-1" key={i} />)
            : blogs &&
              blogs?.map((blog, i) => (
                <CardBlog
                  className={cn("flex-1", {
                    "lg:block hidden": i == 2,
                    "sm:block hidden": i == 1,
                  })}
                  key={blog?.id}
                  blog={blog}
                />
              ))}
        </div>
      </div>
    </section>
  );
}
