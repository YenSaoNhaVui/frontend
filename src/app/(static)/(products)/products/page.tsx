"use client";

import SearchAndFilterPanel from "@/components/search-and-filter-panel";
import Categories from "../categories";
import ProductCard from "@/components/product-card";
import { Pagination } from "antd";

export default function ProductsPage() {
  return (
    <section className="bg-cover bg-no-repeat lg:mt-8 mt-2.5 lg:pb-7 text-black">
      <div className="xl:max-w-[1280px] xl:mx-auto sm:mx-8 mx-6 flex lg:flex-row flex-col lg:gap-[30px]">
        <Categories />
        <div className="flex-1">
          <div className="flex items-center justify-between flex-wrap gap-y-[30px]">
            <h5 className="text-primary-1-7 lg:block hidden">Sản phẩm</h5>
            <SearchAndFilterPanel queries={["category"]} filterItems={items} />
          </div>
          <div className="lg:mt-[18px] mt-[30px] grid lg:grid-cols-5 grid-cols-2 gap-3">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <div className="lg:my-4 my-[38px] flex lg:justify-end justify-center">
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
