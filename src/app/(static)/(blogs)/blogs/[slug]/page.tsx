"use client";

import BreadCrumbs from "@/components/bread-crumbs";
import CardBlog from "@/components/card-blog";
import { CalendarIcon } from "@/components/icons";
import Icon from "@/components/ui/icon";

export default function BlogDetailsPage() {
  return (
    <section className="xl:max-w-[1280px] xl:mx-auto sm:mx-8 mx-4 text-black">
      <BreadCrumbs
        linkBack="/blogs"
        titleCurrent="Cách chưng hấp tổ yến"
        titlePrev="Blog"
        className="my-[34px]"
      />
      <div className="mt-[54px] max-w-[920px] mx-auto bg-white p-[30px] rounded-[20px] mb-[45px]">
        <h3>Cách chưng hấp tổ yến</h3>
        <div className="flex gap-1 mb-4">
          <Icon size="md" className="[&_path]:!fill-neutral-5">
            <CalendarIcon />
          </Icon>
          <p className="text-body-sm-medium text-neutral-5 font-poppins-medium">31/10/2003</p>
        </div>
        <p className="text-neutral-6 font-normal text-[20px] leading-[30px] mb-4">
          Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est
          a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
          interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </p>
        <figure className="max-h-[500px] relative w-full rounded-lg mb-4">
          <div className="pt-[100%] overflow-hidden">
            <img
              alt="123"
              src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSHdEgfNwXdaRTy76pJSC5pP7e-JSbAAn62JYnUEIhv23GDGF_8uO1JeTr9EaXQ3n-FkCJ15nlj8BJgojLZmke9GUL8QCCuDtJRoO3noLmxapWqfj2AbBUO&usqp=CAE"
              className="absolute top-0 left-0 w-full h-full rounded-lg object-contain"
            />
          </div>
        </figure>
        <p className="font-normal text-[20px] leading-[30px] mb-4">
          Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est
          a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
          interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent
          auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
          Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis
          convallis diam sit amet lacinia. Aliquam in elementum tellus.
        </p>
        <p className="font-normal text-[20px] leading-[30px] mb-4">
          Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est
          a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
          interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent
          auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
          Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis
          convallis diam sit amet lacinia. Aliquam in elementum tellus.
        </p>
        <p className="font-normal text-[20px] leading-[30px] mb-4">
          Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est
          a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
          interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent
          auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
          Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis
          convallis diam sit amet lacinia. Aliquam in elementum tellus.
        </p>
        <p className="font-normal text-[20px] leading-[30px] mb-4">
          Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est
          a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
          interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent
          auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
          Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis
          convallis diam sit amet lacinia. Aliquam in elementum tellus.
        </p>
      </div>
      <div className="mb-[77px]">
        <h3 className="text-center text-primary-1-7 mb-8">BÀI VIẾT LIÊN QUAN</h3>
        <div className="flex gap-4">
          <CardBlog />
          <CardBlog />
          <CardBlog />
        </div>
      </div>
    </section>
  );
}
