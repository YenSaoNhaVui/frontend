import Link from "next/link";
import { ArrowRightStraightIcon, CalendarIcon } from "../icons";
import Icon from "../ui/icon";
import { Blog } from "@/interfaces";
import dateformat from "dateformat";
import { cn } from "@/utils";

export default function CardBlog({ blog, className }: { blog?: Blog; className?: string }) {
  return (
    <Link href={`/blogs/${blog?.id || 1}`} className={className}>
      <main className="p-2.5 rounded-lg bg-primary-1-7">
        <div className="max-w-4xl mx-auto">
          <div className="relative pt-[71%] overflow-hidden">
            <img
              src={
                typeof blog?.thumbnail == "string"
                  ? blog?.thumbnail + "-/quality/lighter/-/format/webp/-/progressive/yes/"
                  : (blog?.thumbnail?.[0] as string) +
                    "-/quality/lighter/-/format/webp/-/progressive/yes/"
              }
              alt={blog?.title}
              className="w-full h-full top-0 left-0 absolute object-cover rounded-lg"
              loading="lazy"
            />
          </div>
          <h5 className="mt-2 text-primary-2-5 line-clamp-1">
            {blog?.title || "Cách chưng hấp tổ yến"}
          </h5>
          <div className="flex items-center mt-1 gap-1">
            <Icon size="md" className="[&_path]:!fill-secondary-5">
              <CalendarIcon />
            </Icon>
            <p className="text-body-sm-medium text-secondary-5">
              {blog?.createdAt ? dateformat(blog?.createdAt, "dd/mm/yyyy") : "31/10/2003"}
            </p>
          </div>
          <p className="mt-1 text-body-xs-normal text-white line-clamp-4 h-[88px]">
            {blog?.description ||
              `This sunny and spacious room is for those traveling light and looking for a comfy and cosy
            place to lay their head for a night or two. This beach house sits in a vibrant neighborhood
            littered with cafes, pubs, restaurants and supermarkets and is close to all the major
            attractions such as Edinburgh Castle and Arthur' Seat.`}
          </p>
          <div className="flex items-center gap-1">
            <p className="text-[14px] leading-[22px] underline text-[#EED670]">Xem Thêm</p>
            <Icon size="lg" className="ml-1">
              <ArrowRightStraightIcon />
            </Icon>
          </div>
        </div>
      </main>
    </Link>
  );
}
