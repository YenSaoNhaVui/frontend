"use client";

import ProductCard from "@/components/product-card";
import ProductCardLoading from "@/components/product-card/loading";
import SearchAndFilterPanel from "@/components/search-and-filter-panel";
import useAsync from "@/hooks/use-async";
import { Product } from "@/interfaces";
import { getProducts } from "@/service";
import { configSlugify } from "@/utils";
import { useCategory } from "@/zustand";
import { Pagination } from "antd";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Categories from "../categories";

export const getAnyMore = async (): Promise<any> => {
  return [];
};

export default function ProductsPage() {
  const [page, setPage] = useState<number>(0);
  const q = useSearchParams()?.get("q");
  const filter = useSearchParams()?.get("filter");
  const params = useSearchParams()?.get("category");
  const { data, loading, refetch } = useAsync<Product[]>(() => getAnyMore());
  const { isLoading, categories } = useCategory();
  const changePage = async (e: number) => {
    setPage(e);
    if (e == page) return;
    fetchProducts(e);
  };
  const fetchProducts = async (e?: number) => {
    const categoryId = categories?.filter((data) => configSlugify(data?.title) == params)[0];
    let option: any = { take: 10 };
    if (e) option = { ...option, skip: (e - 1) * 10 };
    if (q) option = { ...option, search: q };
    else {
      if (!params || !categoryId) option = { ...option, categoryId: categories[0]?.id };
      else option = { ...option, categoryId: categoryId?.id };
    }
    if (filter) option = { ...option, filter };
    refetch(() => getProducts(option));
  };
  useEffect(() => {
    if (isLoading) return;
    fetchProducts();
  }, [params, isLoading, q, filter]);
  return (
    <section className="bg-cover bg-no-repeat lg:mt-8 mt-2.5 lg:pb-10 text-black">
      <div className="xl:max-w-[1280px] xl:mx-auto sm:mx-8 mx-6 flex lg:flex-row flex-col lg:gap-[30px]">
        <Categories data={categories} loading={isLoading} />
        <div className="flex-1">
          <div className="flex items-center justify-between flex-wrap gap-y-[30px]">
            <h5 className="text-primary-1-7 lg:block hidden">Sản phẩm</h5>
            <SearchAndFilterPanel queries={["category"]} filterItems={items} />
          </div>
          <div className="lg:mt-[18px] mt-[30px] grid lg:grid-cols-5 grid-cols-2 gap-3">
            {loading || isLoading || data == null ? (
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map((key) => <ProductCardLoading key={key} />)
            ) : data?.length == 0 ? (
              <div className="w-full h-[400px] flex items-center justify-center lg:col-span-5 col-span-2">
                <h1>Không tìm thấy sản phẩm</h1>
              </div>
            ) : (
              (data || [])?.map((product) => <ProductCard key={product?.id} product={product} />)
            )}
          </div>
          <div className="lg:my-4 my-[38px] flex lg:justify-end justify-center">
            <Pagination
              defaultCurrent={1}
              total={data ? data?.length + 1 : 1}
              pageSize={10}
              onChange={(e) => changePage(e)}
            />
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
    key: "3",
  },
  {
    label: "Giá thấp - cao",
    key: "4",
  },
];
