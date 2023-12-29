import { ArrowDownIcon } from "@/components/icons";
import DropDown from "@/components/ui/drop-down";
import Icon from "@/components/ui/icon";
import useAsync from "@/hooks/use-async";
import { useClickOutSide } from "@/hooks/use-click-outside";
import { Category } from "@/interfaces";
import { getCategorys } from "@/service";
import { configSlugify } from "@/utils/config-slugify";
import { useCategory } from "@/zustand";
import { Spin } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";

function ItemLink({
  header,
}: {
  header: {
    title: string;
    link?: string;
  };
}) {
  const [openProduct, setOpenProduct] = useState<boolean>(false);
  const { data, loading } = useAsync<Category[]>(() => getCategorys());
  const { setProductCarts } = useCategory();
  useClickOutSide(openProduct, setOpenProduct, ".dropdown");
  useEffect(() => {
    if (loading) return;
    setProductCarts(!data ? [] : data);
  }, [loading]);
  return (
    <div
      onClick={() => (header?.title == "Sản phẩm" ? setOpenProduct(!openProduct) : null)}
      key={header?.title}
      className="flex items-center gap-2 px-4 py-2 hover:text-secondary-6 [&_path]:hover:!fill-secondary-6 relative cursor-pointer"
    >
      <p className="text-body-md-medium font-medium !m-0">{header?.title}</p>
      {header?.title == "Sản phẩm" && (
        <>
          <Icon size="md">
            <ArrowDownIcon />
          </Icon>
          {openProduct && (
            <DropDown className="dropdown absolute bg-white top-[52px] left-4  [&_ul]:mx-0 [&_ul]:px-0 rounded-md border border-solid border-neutral-4 [&_li]:p-2.5 [&_ul]:!list-none [&_ul]:!m-0">
              {!data || loading
                ? [1]?.map((i) => (
                    <div key={i} className="w-[150px] h-[170px] flex items-center justify-center">
                      <Spin />
                    </div>
                  ))
                : data?.map((_) => (
                    <Link key={_?.id} href={`/products?category=${configSlugify(_?.title)}`}>
                      <li
                        key={_?.id}
                        className="border-b border-solid border-neutral-4 whitespace-nowrap !text-primary-1-7"
                      >
                        {_?.title}
                      </li>
                    </Link>
                  ))}
            </DropDown>
          )}
        </>
      )}
    </div>
  );
}

export default function HeaderLinks() {
  return (
    <>
      {HEADERS?.map((header) =>
        header?.link ? (
          <Link key={header?.title} href={header?.link} className="text-neutral-1">
            <ItemLink header={header} />
          </Link>
        ) : (
          <ItemLink key={header?.title} header={header} />
        )
      )}
    </>
  );
}

export const HEADERS: {
  title: string;
  link?: string;
}[] = [
  {
    title: "Trang chủ",
    link: "/",
  },
  {
    title: "Sản phẩm",
  },
  {
    title: "Giới thiệu",
    link: "/about",
  },
  {
    title: "Blog",
    link: "/blogs",
  },
  {
    title: "Đối tác - Liên kết",
    link: "/parnership-and-collabration",
  },
  {
    title: "Liên hệ",
    link: "/contact",
  },
];
