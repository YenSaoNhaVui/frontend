import { Dropdown, Menu, MenuProps } from "antd";
import { HEADERS } from "./header-links";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { ArrowDownIcon, MenuIcon } from "@/components/icons";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn, configSlugify } from "@/utils";
import { useEffect, useState } from "react";
import { useClickOutSide } from "@/hooks/use-click-outside";
import { useCategory } from "@/zustand";

export default function DropDownMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { categories } = useCategory();
  const url = usePathname();
  const params = useSearchParams()?.get("category");
  const itemsCategories = categories?.map((_data, i) => ({
    label: <Link href={`/products?category=${configSlugify(_data?.title)}`}>{_data?.title}</Link>,
    key: i,
  }));
  const items: MenuProps["items"] = HEADERS.map((header, i) => ({
    key: i,
    label:
      header.title == "Sản phẩm" ? (
        <Dropdown
          menu={{ items: itemsCategories }}
          placement="bottom"
          trigger={["click"]}
          rootClassName="!left-[205px] menu"
        >
          <div
            className={
              (header?.link && header?.link == url) || (!header?.link && url.startsWith("/products"))
                ? "!text-primary-1-6"
                : ""
            }
          >
            {header?.title}
            <Icon size="md" className="[&_path]:!fill-black ml-2">
              <ArrowDownIcon />
            </Icon>
          </div>
        </Dropdown>
      ) : (
        <Link
          className={
            (header?.link && header?.link == url) || (!header?.link && url.startsWith("/products"))
              ? "!text-primary-1-6"
              : ""
          }
          href={header?.link || "/products"}
        >
          {header?.title}
        </Link>
      ),
  }));
  useClickOutSide(isOpen, setIsOpen, ".menu");
  useEffect(() => {
    setIsOpen(false);
  }, [url, params]);
  return (
    <>
      <Button
        aria-label="Dropdown button"
        title="Dropdown"
        variant="ghost"
        size="0"
        onClick={() => setIsOpen(true)}
        className="[&_path]:fill-white hover:!bg-transparent lg:!hidden block"
      >
        <Icon size="lg">
          <MenuIcon />
        </Icon>
      </Button>
      {isOpen && <div className="bg-black/40 fixed top-0 left-0 w-full h-full z-[3000]" />}
      {isOpen && (
        <div
          className={cn(
            "lg:mt-[66px] w-[200px] lg:relative [&>ul]:lg:block [&>ul]:hidden fixed lg:block hidden lg:z-0 z-[5000] top-0 left-0 h-full [&>ul]:lg:rounded-none [&>ul]:rounded-r-lg menu",
            {
              "[&>ul]:lg:!block [&>ul]:!block !block": isOpen,
            }
          )}
        >
          <Menu className={className} style={{ width: 200 }} mode="inline" items={items} />
        </div>
      )}
    </>
  );
}

const className = `[&>li>div]:!px-0 [&>li>div]:!text-body-lg-semibold [&>li>div]:!text-primary-1-7 [&>li>div]:!py-2.5 px-5 py-1.5 [&>li>div]:border-b [&>li>div]:border-solid [&>li>div]:border-primary-1-7 [&>li>div]:mb-1.5 !border-0 !h-full [&_.ant-menu-item]:!px-[5px] [&_.ant-menu-item]:!py-1.5 [&_.ant-menu-item]:!m-0  [&_.ant-menu-item]:!mb-2.5 [&_.ant-menu-item]:!text-body-md-normal [&_.ant-menu-item]:text-black [&_.ant-menu-item-selected]:!bg-transparent [&_.ant-menu-item-selected]:!text-black`;
