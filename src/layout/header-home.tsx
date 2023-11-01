import { ArrowDownIcon, CartIcon } from "@/components/icons";
import Icon from "@/components/ui/icon";
import Link from "next/link";

export default function HeaderHome() {
  return (
    <header className="fixed bg-transparent top-0 left-0 right-0 max-w-[1280px] mx-auto h-5 w-full text-white">
      <div className="w-full flex items-center justify-center relative py-2">
        <img
          src="https://ucarecdn.com/40cc2fc4-c681-4efe-906f-c07fca244415/-/preview/-/quality/smart/-/format/auto/"
          className="absolute left-0 top-[13px]"
          alt="logo"
        />
        <div className="py-2.5 gap-9 w-full flex items-center justify-center">
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
