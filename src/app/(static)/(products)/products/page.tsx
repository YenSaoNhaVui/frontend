"use client";

import SearchAndFilterPanel from "@/components/search-and-filter-panel";
import Categories from "../categories";
import ProductCard from "@/components/product-card";
import { Pagination } from "antd";

export default function ProductsPage() {
  return (
    <section className="bg-cover bg-no-repeat mt-8 pb-7 text-black">
      <div className="xl:max-w-[1280px] xl:mx-auto sm:mx-8 mx-4 flex gap-[30px]">
        <Categories />
        <div className="flex-1">
          <div className="flex items-center justify-between flex-wrap gap-y-[30px]">
            <h5 className="text-primary-1-7">Sản phẩm</h5>
            <SearchAndFilterPanel queries={["category"]} filterItems={items} />
          </div>
          <div className="mt-[18px] grid lg:grid-cols-5 gap-3">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <div className="my-4 flex justify-end">
            <Pagination defaultCurrent={1} total={50} />
          </div>
        </div>
      </div>
    </section>
  );
}
const items: {
  label: string;
  key: string;
}[] = [
  {
    label: "Bán chạy",
    key: "1",
  },
  {
    label: "Hàng mới",
    key: "2",
  },
  {
    label: "Giá cao - thấp",
    key: "2",
  },
  {
    label: "Giá thấp - cao",
    key: "2",
  },
];
