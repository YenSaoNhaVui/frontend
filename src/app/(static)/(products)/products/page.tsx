"use client";

import ProductCard from "@/components/product-card";
import ProductCardLoading from "@/components/product-card/loading";
import SearchAndFilterPanel from "@/components/search-and-filter-panel";
import useAsync from "@/hooks/use-async";
import { Product } from "@/interfaces";
import { getProducts } from "@/service";
import { configSlugify, unitData } from "@/utils";
import { useCategory } from "@/zustand";
import { Pagination } from "antd";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Categories from "../categories";
import { getAnymore } from "@/utils/getAnymore";

const sort = {
  "ban-chay": "SELLING",
  "gia-cao-thap": "PRICE_DESC",
  "gia-thap-cao": "PRICE_ASC",
  "hang-moi": "RECENT_CREATED",
};

export default function ProductsPage() {
  const [page, setPage] = useState<number>(1);
  const [products, setProducts] = useState<Product[] | null>(null);
  const [isFecthMore, setIsFetchMore] = useState<boolean>(true);
  const q = useSearchParams()?.get("q");
  const filter = useSearchParams()?.get("filter");
  const params = useSearchParams()?.get("category");
  const { data, loading, refetch } = useAsync<Product[]>(() => getAnymore());
  const { isLoading, categories } = useCategory();
  const changePage = async (e: number) => {
    setPage(e);
    if (!isFecthMore) return;
    if (products?.length - e * 10 <= 20) fetchProducts(products?.length);
  };
  const fetchProducts = async (e?: number) => {
    const categoryId = categories?.filter((data) => configSlugify(data?.title) == params)[0];
    let option: any = { take: 50 };
    if (e) option = { ...option, skip: e };
    if (q) option = { ...option, search: q };
    else {
      if (!params || !categoryId || categoryId.id == -1) option = { ...option };
      else option = { ...option, categoryId: categoryId?.id };
      if (filter) option = { ...option, order: sort[filter] || "SELLING" };
      else option = { ...option, order: "SELLING" };
    }
    refetch(() => getProducts(option));
  };
  useEffect(() => {
    setPage(1);
    setProducts(null);
    if (isLoading) return;
    fetchProducts();
  }, [params, isLoading, q, filter]);
  useEffect(() => {
    if (isLoading) return;
    if (!data) return;
    if (data?.length < 50) setIsFetchMore(false);
    setProducts((prev) => unitData([...(prev || []), ...data], "id") as any);
  }, [data, isLoading]);
  return (
    <section className="bg-cover bg-no-repeat lg:mt-8 mt-2.5 lg:pb-10 text-black">
      <div className="xl:max-w-[1280px] xl:mx-auto sm:mx-8 mx-6 flex lg:flex-row flex-col lg:gap-[30px]">
        <Categories data={categories} loading={isLoading} />
        <div className="flex-1">
          <div className="flex items-center justify-between flex-wrap gap-y-[30px]">
            <h5 className="text-primary-1-7 lg:block hidden">Sản phẩm</h5>
            <SearchAndFilterPanel queries={["category"]} filterItems={items} />
          </div>
          <div className="lg:mt-[18px] mt-[30px] grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3">
            {(loading || isLoading) && products == null
              ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map((key) => <ProductCardLoading key={key} />)
              : products?.length == 0 && (
                  <div className="w-full h-[400px] flex items-center justify-center lg:col-span-5 col-span-2">
                    <h1>Không tìm thấy sản phẩm</h1>
                  </div>
                )}
            {products &&
              products
                ?.slice((page - 1) * 10, page * 10)
                ?.map((product) => <ProductCard key={product?.id} product={product} />)}
          </div>
          {products?.length != 0 && products && (
            <div className="lg:my-4 my-[38px] flex lg:justify-end justify-center">
              <Pagination
                defaultCurrent={1}
                total={products?.length}
                pageSize={10}
                onChange={(e) => changePage(e)}
              />
            </div>
          )}
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
