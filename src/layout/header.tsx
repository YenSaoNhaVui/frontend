import { ArrowDownIcon, CartIcon } from "@/components/icons";
import Icon from "@/components/ui/icon";
import { cn } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const url = usePathname();
  console.log(url);
  return (
    <header
      className={cn(
        "fixed bg-transparent top-0 left-0 right-0 w-full text-white",
        {
          "bg-primary": url != "/",
        }
      )}
    >
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
          )}
        >
          {HEADERS?.map((header) => (
            <Link href="/">
              <div
                key={header}
                className="flex items-center gap-4 px-4 py-[11px]"
              >
                <p className="text-body-14 font-medium">{header}</p>
                {header == "Sản phẩm" && (
                  <Icon size="md">
                    <ArrowDownIcon />
                  </Icon>
                )}
              </div>
            </Link>
          ))}
        </div>
        <div className="absolute top-2 right-0">
          <Icon className="!w-[34px] !h-[34px]">
            <CartIcon />
          </Icon>
        </div>
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
