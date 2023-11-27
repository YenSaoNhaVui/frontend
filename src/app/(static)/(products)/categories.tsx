import { FilterIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useClickOutSide } from "@/hooks/use-click-outside";
import { cn } from "@/utils";
import { Menu, MenuProps } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
type MenuItem = Required<MenuProps>["items"][number];

export default function Categories() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const params = useSearchParams()?.get("category");
  const router = useRouter();
  const onClick = (e: any) => {
    router.push(`/products?category=${e?.key}`);
  };
  const items: MenuProps["items"] = [
    getItem(
      "Categories",
      "cate",
      null,
      [
        getItem("Yến tinh chế", "yen-tinh-che"),
        getItem("Yến rút lông", "yen-rut-long"),
        getItem("Tổ yến cao cấp", "to-yen-cao-cap"),
        getItem("Quà tặng cao cấp", "qua-tang-cao-cap"),
      ],
      "group"
    ),
  ];
  useClickOutSide(isOpen, setIsOpen, ".categories");
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
          "lg:mt-[66px] w-[200px] lg:relative fixed lg:z-0 z-[5000] top-0 left-0 h-full [&>ul]:lg:rounded-none [&>ul]:rounded-r-lg categories",
          {
            "[&>ul]:lg:!block [&>ul]:!block": isOpen,
          }
        )}
      >
        <Menu
          className={className}
          onClick={onClick}
          style={{ width: 200 }}
          defaultSelectedKeys={
            !params
              ? ["yen-tinh-che"]
              : arrItems.indexOf(params) != -1
              ? [arrItems[arrItems.indexOf(params)]]
              : ["yen-tinh-che"]
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
const arrItems = ["yen-tinh-che", "yen-rut-long", "to-yen-cao-cap", "qua-tang-cao-cap"];
const className = `lg:block hidden [&>li>div]:!px-0 [&>li>div]:!text-body-lg-semibold [&>li>div]:!text-primary-1-7 [&>li>div]:!py-2.5 px-5 py-1.5 [&>li>div]:border-b [&>li>div]:border-solid [&>li>div]:border-primary-1-7 [&>li>div]:mb-1.5 !border-0 !h-full [&_.ant-menu-item]:!px-[5px] [&_.ant-menu-item]:!py-1.5 [&_.ant-menu-item]:!m-0  [&_.ant-menu-item]:!mb-2.5 [&_.ant-menu-item]:!text-body-md-normal [&_.ant-menu-item]:text-primary-1-7 [&_.ant-menu-item-selected]:!text-body-md-semibold [&_.ant-menu-item-selected]:!text-primary-1-4`;
