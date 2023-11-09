"use client";

import { BreadCrumbsIcon, SideBarIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import HeaderBlog from "./header-blog";

export default function BlogsPage() {
  return (
    <section className="bg-cover bg-no-repeat pt-[130px] pb-[153px]">
      <div className="xl:max-w-[1280px] xl:mx-auto sm:mx-8 mx-4">
        <HeaderBlog />
      </div>
    </section>
  );
}
