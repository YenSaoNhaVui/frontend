import { Dropdown, MenuProps } from "antd";
import { HEADERS } from "./header-links";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { MenuIcon } from "@/components/icons";
import { usePathname } from "next/navigation";

export default function DropDownMenu() {
  const url = usePathname();
  const items: MenuProps["items"] = HEADERS.map((header, i) => ({
    key: i,
    label: (
      <Link
        className={
          (header?.link && header?.link == url) || (!header?.link && url.startsWith("/products"))
            ? "!text-primary-2-5"
            : ""
        }
        href={header?.link || "/products"}
      >
        {header?.title}
      </Link>
    ),
  }));
  return (
    <Dropdown
      trigger={["click"]}
      menu={{ items }}
      placement="bottomLeft"
      rootClassName={classMain}
      className="lg:hidden block"
    >
      <Button variant="ghost" size="0" className="[&_path]:fill-white hover:!bg-transparent">
        <Icon size="lg">
          <MenuIcon />
        </Icon>
      </Button>
    </Dropdown>
  );
}

const classBorder = "[&_.ant-dropdown-menu]:!border-[0.5px] [&_.ant-dropdown-menu]:!border-primary-1-8";
const classLi =
  "[&_.ant-dropdown-menu_li]:!text-center [&_.ant-dropdown-menu_li]:!text-body-sm-normal font-poppins-normal";
const classMain =
  classBorder + " [&_.ant-dropdown-menu]:bg-primary-1-7 [&_.ant-dropdown-menu]:p-0 " + classLi;
