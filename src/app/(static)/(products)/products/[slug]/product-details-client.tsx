"use client";
import BreadCrumbs from "@/components/bread-crumbs";
import ProductDetails from "./product-details";
import { Tabs, TabsProps } from "antd";
import { cn } from "@/utils";
import { useState } from "react";
import ProductDescription from "./product-description";
import MoreProducts from "./more-products";
import ProductReview from "./product-review";
import useAsync from "@/hooks/use-async";
import { Category, Product } from "@/interfaces";
import { getProductsById } from "@/service";

export default function ProductDetailsClient({ slug }: { slug: string }) {
  const [keyTab, setKeyTab] = useState<string>("1");
  const { data, loading } = useAsync<Product>(() => getProductsById(slug));
  if (loading) return <p>Loading...</p>;

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
      label: "Đánh giá và bình luận (2)",
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
