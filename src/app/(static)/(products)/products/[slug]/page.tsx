"use client";
import BreadCrumbs from "@/components/bread-crumbs";
import ProductDetails from "./product-details";
import { Tabs, TabsProps } from "antd";
import { cn } from "@/utils";
import { useState } from "react";
import ProductDescription from "./product-description";
import MoreProducts from "./more-products";
import ProductReview from "./product-review";

export default function ProductDetailsPage() {
  const [keyTab, setKeyTab] = useState<string>("1");
  const onChange = (key: string) => {
    setKeyTab(key);
  };
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Mô tả chi tiết về sản phẩm",
      children: <ProductDescription />,
    },
    {
      key: "2",
      label: "Đánh giá và bình luận (2)",
      children: <ProductReview />,
    },
  ];
  return (
    <section className="xl:max-w-[1280px] xl:mx-auto sm:mx-8 mx-4 text-black">
      <BreadCrumbs
        linkBack="/products"
        titleCurrent="Yến Nhà Vui - 01"
        titlePrev="Sản phẩm"
        className="my-[34px]"
      />
      <ProductDetails />
      <Tabs
        defaultActiveKey="1"
        items={items}
        className={cn(classNameTab, {
          "[&_.ant-tabs-ink-bar]:!w-[67px]": keyTab == "2",
        })}
        onChange={onChange}
      />
      <MoreProducts />
    </section>
  );
}
const classNameTab =
  "[&_.ant-tabs-nav:before]:!border-b [&_.ant-tabs-nav:before]:!border-neutral-5 [&_.ant-tabs-tab-btn]:!text-body-sm-semibold [&_.ant-tabs-tab-btn]:!text-neutral-5 [&_.ant-tabs-tab-active>.ant-tabs-tab-btn]:!text-primary-1-5 [&_.ant-tabs-ink-bar]:!w-[81px] [&_.ant-tabs-ink-bar]:!bg-primary-1-5";
