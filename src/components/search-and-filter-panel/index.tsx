"use client";
import { Dropdown, Input } from "antd";
import Icon from "../ui/icon";
import { ArrowDownIcon, SearchIcon } from "../icons";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { configSlugify } from "@/utils/config-slugify";
interface Props {
  filterItems: {
    label: string;
    key: string;
  }[];
  queries?: string[];
}

export default function SearchAndFilterPanel({ filterItems, queries }: Props) {
  const [text, setText] = useState<string>("");
  const [sort, setSort] = useState<string>("");
  const pathName = usePathname();
  const router = useRouter();
  const params = useSearchParams();
  const handleMenuClick = (info: { key: string }) => {
    const key = parseInt(info?.key || "0") - 1;
    setSort(filterItems[key]?.label);
    const url =
      pathName + `?${getCategory(params, queries)}filter=${configSlugify(filterItems[key]?.label)}`;
    router.push(url);
  };

  const menuProps = {
    items: filterItems,
    onClick: handleMenuClick,
  };

  const search = (e?: any) => {
    const url = pathName + `?${getCategory(params, queries)}q=${configSlugify(text)}`;
    if (e) e.keyCode == 13 && text != "" && (router.push(url), setText(""), setSort(""));
    else router.push(url), setText(""), setSort("");
  };

  useEffect(() => {
    if (params?.get("filter") == "moi-nhat") setSort("Mới nhất");
    else if (params?.get("filter") == "cu-nhat") setSort("Củ nhất");
    else if (params?.get("filter") == "gia-cao-thap") setSort("Giá cao - thấp");
    else if (params?.get("filter") == "gia-thap-cao") setSort("Giá thấp - cao");
  }, [params]);

  return (
    <div className="flex items-center gap-2.5">
      <Input
        className="lg:!max-w-[295px] lg:!min-w-[295px] !max-w-[200px] !min-w-[200px] !px-3 [&>.ant-input-prefix]:!mr-3 [&>input]:placeholder:!text-primary-1-5 !border-primary-1-5 !border-[1.3px]"
        size="large"
        placeholder="Search..."
        onChange={(e) => setText(e?.target?.value)}
        prefix={
          <div className="cursor-pointer" onClick={() => search()}>
            <Icon size="md" className="[&_path]:!stroke-primary-1-5">
              <SearchIcon />
            </Icon>
          </div>
        }
        value={text}
        onKeyDown={(e) => search(e)}
      />
      <Dropdown
        menu={menuProps}
        className="!px-4"
        trigger={["click"]}
        rootClassName="overflow-hidden border border-solid border-neutral-4 rounded-md [&>ul]:!p-0 [&>ul]:!rounded-none [&_li]:!p-2.5 [&_li]:!rounded-none [&_li]:border-b [&_li]:border-solid [&_li]:border-neutral-4 [&_li:last-child]:!border-0 [&_li]:!text-primary-1-7 [&_li]:!text-body-xs-normal"
      >
        <Button rounded="md" className="!py-2 !gap-1 !text-[14px] !leading-[22px] !font-normal">
          <p className="whitespace-nowrap !m-0">{sort == "" ? "Sort by" : sort}</p>
          <Icon size="lg">
            <ArrowDownIcon />
          </Icon>
        </Button>
      </Dropdown>
    </div>
  );
}

function getCategory(params: any, queries?: string[]) {
  let queriesTmp = "";
  if (queries && queries?.length > 0)
    queries?.map((query) => {
      queriesTmp += `${query}=${params?.get(query)}&`;
    });
  return queriesTmp;
}
