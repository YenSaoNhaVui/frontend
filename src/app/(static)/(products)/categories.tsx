import { FilterIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useClickOutSide } from "@/hooks/use-click-outside";
import { Category } from "@/interfaces";
import { cn, configSlugify } from "@/utils";
import { Dropdown, Menu, MenuProps, Spin } from "antd";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
type MenuItem = Required<MenuProps>["items"][number];

interface Props {
  data: Category[];
  loading: boolean;
}

export default function Categories({ data, loading }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const params = useSearchParams()?.get("category");
  const router = useRouter();
  const onClick = (e: any) => {
    router.push(`/products?category=${e?.key}`);
  };
  useClickOutSide(isOpen, setIsOpen, ".categories");
  if (loading || !data)
    return (
      <div className="w-[200px] h-[269px] flex items-center justify-center">
        <Spin />
      </div>
    );
  const items: MenuProps["items"] = [
    getItem(
      "Categories",
      "cate",
      null,
      data?.map((data) => getItem(data?.title, configSlugify(data?.title))),
      "group"
    ),
  ];
  const arrItems = data?.map((d) => configSlugify(d?.title));
  const itemsCategories = data?.map((_data, i) => ({
    label: <Link href={`?category=${configSlugify(_data?.title)}`}>{_data?.title}</Link>,
    key: i,
  }));
  let keys = {};
  data?.map((_data) => (keys[configSlugify(_data?.title)] = _data.title));
  return (
    <>
      <Dropdown menu={{ items: itemsCategories }} className="!px-4" trigger={["click"]}>
        <Button
          aria-label="Filter/Lọc Button"
          title="Filter/Lọc"
          onClick={() => setIsOpen(true)}
          rounded="md"
          className="lg:!hidden !flex items-center justify-center mb-5 max-w-[200px] mx-auto !py-2 !gap-3 !text-[14px] !leading-[22px] !font-normal"
        >
          <Icon size="xl" className="[&_path]:!stroke-white">
            <FilterIcon />
          </Icon>
          <p className="whitespace-nowrap !m-0 !text-[14px] !leading-[22px]">
            {keys?.[params] || "Tất cả sản phẩm"}
          </p>
        </Button>
      </Dropdown>
      <div className="lg:mt-[66px] w-[200px] lg:relative [&>ul]:lg:block [&>ul]:hidden fixed lg:block hidden lg:z-0 z-[5000] top-0 left-0 h-full [&>ul]:lg:rounded-none [&>ul]:rounded-r-lg categories">
        <Menu
          className={className}
          onClick={onClick}
          style={{ width: 200 }}
          defaultSelectedKeys={
            !params
              ? [configSlugify(data[0]?.title)]
              : arrItems.indexOf(params) != -1
              ? [arrItems[arrItems.indexOf(params)]]
              : [configSlugify(data[0]?.title)]
          }
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
        />
      </div>
    </>
  );
}
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
const className = `[&>li>div]:!px-0 [&>li>div]:!text-body-lg-semibold [&>li>div]:!text-primary-1-7 [&>li>div]:!py-2.5 px-5 py-1.5 [&>li>div]:border-b [&>li>div]:border-solid [&>li>div]:border-primary-1-7 [&>li>div]:mb-1.5 !border-0 !h-full [&_.ant-menu-item]:!px-[5px] [&_.ant-menu-item]:!py-1.5 [&_.ant-menu-item]:!m-0  [&_.ant-menu-item]:!mb-2.5 [&_.ant-menu-item]:!text-body-md-normal [&_.ant-menu-item]:text-primary-1-7 [&_.ant-menu-item-selected]:!bg-transparent [&_.ant-menu-item-selected]:!text-primary-1-4`;
