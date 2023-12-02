import { FilterIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import useAsync from "@/hooks/use-async";
import { useClickOutSide } from "@/hooks/use-click-outside";
import { Category } from "@/interfaces";
import { getCategorys } from "@/service";
import { cn, configSlugify } from "@/utils";
import { Menu, MenuProps, Spin } from "antd";
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
  return (
    <>
      <Button
        variant="ghost"
        size="0"
        onClick={() => setIsOpen(true)}
        className="lg:hidden flex items-center justify-center gap-2.5 mb-5 hover:!bg-transparent"
      >
        <Icon size="xl" className="[&_path]:!stroke-primary-1-5">
          <FilterIcon />
        </Icon>
        <p className="text-body-sm-semibold !leading-[20px] text-primary-1-5">LỌC</p>
      </Button>
      {isOpen && <div className="bg-black/40 fixed top-0 left-0 w-full h-full z-[3000]" />}
      <div
        className={cn(
          "lg:mt-[66px] w-[200px] lg:relative [&>ul]:lg:block [&>ul]:hidden fixed lg:block hidden lg:z-0 z-[5000] top-0 left-0 h-full [&>ul]:lg:rounded-none [&>ul]:rounded-r-lg categories",
          {
            "[&>ul]:lg:!block [&>ul]:!block !block": isOpen,
          }
        )}
      >
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
