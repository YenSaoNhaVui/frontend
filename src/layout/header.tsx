import { ArrowDownIcon } from "@/components/icons";
import DropDown from "@/components/ui/drop-down";
import Icon from "@/components/ui/icon";
import { useClickOutSide } from "@/hooks/use-click-outside";
import { cn } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Cart from "./cart";

export default function Header() {
  const url = usePathname();
  const [openProduct, setOpenProduct] = useState<boolean>(false);
  useClickOutSide(openProduct, setOpenProduct, ".dropdown");
  return (
    <header
      className={cn(
        "fixed bg-transparent top-0 left-0 right-0 w-full text-neutral-1 z-50",
        {
          "bg-primary-1-7": url != "/",
        }
      )}>
      <div className="w-full flex items-center justify-center relative py-2 mx-auto max-w-[1280px]">
        <img
          src={
            url == "/"
              ? "https://ucarecdn.com/40cc2fc4-c681-4efe-906f-c07fca244415/-/preview/-/quality/smart/-/format/auto/"
              : "https://ucarecdn.com/d3ab7569-1dc3-4478-8861-eb6a6d78375e/-/preview/-/quality/smart/-/format/auto/"
          }
          className={cn("absolute left-0 top-[13px]", {
            "top-[10.5px]": url != "/",
          })}
          alt="logo"
        />
        <div
          className={cn(
            "py-2.5 gap-9 w-full flex items-center justify-center",
            {
              "py-0 -mt-[1px]": url != "/",
            }
          )}>
          {HEADERS?.map((header) => (
            <Link href="/">
              <div
                onClick={() => setOpenProduct(!openProduct)}
                key={header}
                className="flex items-center gap-4 px-4 py-[11px] hover:text-secondary-6 [&_path]:hover:!fill-secondary-6 relative">
                <p className="text-body-sm-medium font-medium">{header}</p>
                {header == "Sản phẩm" && (
                  <>
                    <Icon size="md">
                      <ArrowDownIcon />
                    </Icon>
                    {openProduct && (
                      <DropDown className="dropdown absolute bg-white top-[52px] left-20  [&_ul]:mx-0 [&_ul]:px-0 rounded-md border border-solid border-neutral-4 [&_li]:p-2.5">
                        <li className="border-b border-solid border-neutral-4 whitespace-nowrap !text-primary-1-7">
                          Yến tinh chế
                        </li>
                        <li className="border-b border-solid border-neutral-4 whitespace-nowrap !text-primary-1-7">
                          Yến rút lông
                        </li>
                        <li className="border-b border-solid border-neutral-4 whitespace-nowrap !text-primary-1-7">
                          Tổ yến cao cấp
                        </li>
                        <li className="whitespace-nowrap !text-primary-1-7">
                          Quà tặng cao cấp
                        </li>
                      </DropDown>
                    )}
                  </>
                )}
              </div>
            </Link>
          ))}
        </div>
        <Cart />
      </div>
    </header>
  );
}

const HEADERS: string[] = [
  "Trang chủ",
  "Giới thiệu",
  "Sản phẩm",
  "Blog",
  "Đối tác - Liên kết",
  "Liên hệ",
];
