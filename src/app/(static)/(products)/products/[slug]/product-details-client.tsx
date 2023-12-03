"use client";
import BreadCrumbs from "@/components/bread-crumbs";
import useAsync from "@/hooks/use-async";
import { Product } from "@/interfaces";
import { getProductsById } from "@/service";
import { cn } from "@/utils";
import { Spin, Tabs, TabsProps } from "antd";
import { useState } from "react";
import MoreProducts from "./more-products";
import ProductDescription from "./product-description";
import ProductDetails from "./product-details";
import ProductReview from "./product-review";

export default function ProductDetailsClient({ slug }: { slug: string }) {
  const [keyTab, setKeyTab] = useState<string>("1");
  const { data, loading } = useAsync<Product>(() => getProductsById(slug));
  if (loading)
    return (
      <div className="w-full h-[800px] flex items-center justify-center">
        <Spin />
      </div>
    );

  const onChange = (key: string) => {
    setKeyTab(key);
  };
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Mô tả chi tiết về sản phẩm",
      children: <ProductDescription product={data} />,
    },
    {
      key: "2",
      label: `Đánh giá và bình luận (${data?.comments?.length})`,
      children: <ProductReview product={data} />,
    },
  ];
  return (
    <section className="xl:max-w-[1280px] xl:mx-auto sm:mx-8 mx-4 text-black">
      <BreadCrumbs
        linkBack="/products"
        titleCurrent={data?.title}
        titlePrev="Sản phẩm"
        className="my-[34px]"
      />
      <ProductDetails product={data} />
      <Tabs
        defaultActiveKey="1"
        items={items}
        className={cn(classNameTab, {
          "[&_.ant-tabs-ink-bar]:!w-[67px]": keyTab == "2",
        })}
        onChange={onChange}
      />
      <MoreProducts product={data} />
    </section>
  );
}
const classNameTab =
  "[&_.ant-tabs-nav:before]:!border-b [&_.ant-tabs-nav:before]:!border-neutral-5 [&_.ant-tabs-tab-btn]:!text-body-sm-semibold [&_.ant-tabs-tab-btn]:!text-neutral-5 [&_.ant-tabs-tab-active>.ant-tabs-tab-btn]:!text-primary-1-5 [&_.ant-tabs-ink-bar]:!w-[81px] [&_.ant-tabs-ink-bar]:!bg-primary-1-5";
