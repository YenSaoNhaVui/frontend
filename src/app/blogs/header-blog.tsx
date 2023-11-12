import {
  ArrowDownIcon,
  BreadCrumbsIcon,
  SearchIcon,
  SideBarIcon,
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Dropdown, Input, Space } from "antd";
import Link from "next/link";

export default function HeaderBlog() {
  const items: {
    label: string;
    key: string;
  }[] = [
    {
      label: "Mới nhất",
      key: "1",
    },
    {
      label: "Cũ nhất",
      key: "2",
    },
  ];

  const handleMenuClick = () => {};

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <>
      <div className="flex items-center">
        <Link href="/">
          <Button variant="ghost" className="w-auto !p-1" rounded="md">
            <Icon size="lg">
              <SideBarIcon />
            </Icon>
          </Button>
        </Link>
        <Link href="/">
          <p className="ml-7 text-body-sm-medium text-neutral-5">Trang chủ</p>
        </Link>
        <Icon size="lg" className="mx-2">
          <BreadCrumbsIcon />
        </Icon>
        <p className="text-body-sm-medium text-neutral-8">Blogs</p>
      </div>
      <div className="mt-3 flex items-center justify-between flex-wrap gap-y-[30px]">
        <h5 className="text-primary-1-7">Blogs</h5>
        <div className="flex items-center gap-2.5">
          <Input
            className="!max-w-[295px] !px-3 [&>.ant-input-prefix]:!mr-3 [&>input]:placeholder:!text-primary-1-5 !border-primary-1-5"
            size="large"
            placeholder="Search..."
            prefix={
              <Icon size="md" className="[&_path]:!stroke-primary-1-5">
                <SearchIcon />
              </Icon>
            }
          />
          <Dropdown
            menu={menuProps}
            className="!px-4"
            trigger={["click"]}
            rootClassName="overflow-hidden border border-solid border-neutral-4 rounded-md [&>ul]:!p-0 [&>ul]:!rounded-none [&_li]:!p-2.5 [&_li]:!rounded-none [&_li]:border-b [&_li]:border-solid [&_li]:border-neutral-4 [&_li:last-child]:!border-0 [&_li]:!text-primary-1-7 [&_li]:!text-body-xs-normal"
          >
            <Button
              rounded="md"
              className="max-w-[109px] !py-2 !gap-1 !text-[14px] !leading-[22px] !font-normal"
            >
              Sort by
              <Icon size="lg">
                <ArrowDownIcon />
              </Icon>
            </Button>
          </Dropdown>
        </div>
      </div>
    </>
  );
}
