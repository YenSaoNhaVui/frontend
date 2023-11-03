import { ArrowDownIcon } from "@/components/icons";
import DropDown from "@/components/ui/drop-down";
import Icon from "@/components/ui/icon";
import { useClickOutSide } from "@/hooks/use-click-outside";
import Link from "next/link";
import { useState } from "react";

export default function HeaderLinks() {
  const [openProduct, setOpenProduct] = useState<boolean>(false);
  useClickOutSide(openProduct, setOpenProduct, ".dropdown");
  return (
    <>
      {HEADERS?.map((header) => (
        <Link href={header?.link}>
          <div
            onClick={() =>
              header?.title == "Sản phẩm" ? setOpenProduct(!openProduct) : null
            }
            key={header?.title}
            className="flex items-center gap-4 px-4 py-[10px] hover:text-secondary-6 [&_path]:hover:!fill-secondary-6 relative"
          >
            <p className="text-body-sm-medium font-medium">{header?.title}</p>
            {header?.title == "Sản phẩm" && (
              <>
                <Icon size="md">
                  <ArrowDownIcon />
                </Icon>
                {openProduct && (
                  <DropDown className="dropdown absolute bg-white top-[52px] left-20  [&_ul]:mx-0 [&_ul]:px-0 rounded-md border border-solid border-neutral-4 [&_li]:p-2.5">
                    {[
                      "Yến tinh chế",
                      "Yến rút lông",
                      "Tổ yến cao cấp",
                      "Quà tặng cao cấp",
                    ]?.map((_) => (
                      <li
                        key={_}
                        className="border-b border-solid border-neutral-4 whitespace-nowrap !text-primary-1-7"
                      >
                        {_}
                      </li>
                    ))}
                  </DropDown>
                )}
              </>
            )}
          </div>
        </Link>
      ))}
    </>
  );
}

const HEADERS: {
  title: string;
  link: string;
}[] = [
  {
    title: "Trang chủ",
    link: "/",
  },
  {
    title: "Giới thiệu",
    link: "/",
  },
  {
    title: "Sản phẩm",
    link: "/",
  },
  {
    title: "Blog",
    link: "/",
  },
  {
    title: "Đối tác - Liên kết",
    link: "/",
  },
  {
    title: "Liên hệ",
    link: "/contact",
  },
];
