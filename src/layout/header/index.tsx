import { cn } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Cart from "../cart";
import DropDownMenu from "./drop-down-menu";
import HeaderLinks from "./header-links";

export default function Header() {
  const url = usePathname();
  const logoHome = ["/", "/about"];
  return (
    <header
      className={cn("sticky bg-transparent top-0 left-0 right-0 w-full text-neutral-1 z-[50]", {
        "bg-primary-1-7": url != "/" && url != "/about",
      })}
    >
      <div className="w-full flex items-center lg:justify-center justify-between relative lg:py-2 p-7 mx-auto max-w-[1280px]">
        <DropDownMenu />
        <Link href="/" className="lg:hidden flex gap-1.5 items-center">
          <img
            src="https://ucarecdn.com/40cc2fc4-c681-4efe-906f-c07fca244415/-/preview/-/quality/smart/-/format/auto/"
            className="w-2.5 h-[25px] object-contain"
            alt="logo"
          />
          <img
            src="https://ucarecdn.com/d3ab7569-1dc3-4478-8861-eb6a6d78375e/-/preview/-/quality/smart/-/format/auto/"
            alt="logo Yến sào vui"
            className="w-[65px] h-6 object-contain"
          />
        </Link>
        <Link href="/" className="lg:block hidden">
          {(logoHome.indexOf(url) != -1 || url == "/contact") && (
            <img
              src="https://ucarecdn.com/40cc2fc4-c681-4efe-906f-c07fca244415/-/preview/-/quality/smart/-/format/auto/"
              className={cn("absolute left-0 top-[13px]", {
                "w-[17px] h-10 top-[9px]": url == "/contact",
              })}
              alt="logo"
            />
          )}
          {logoHome.indexOf(url) == -1 && (
            <img
              src="https://ucarecdn.com/d3ab7569-1dc3-4478-8861-eb6a6d78375e/-/preview/-/quality/smart/-/format/auto/"
              alt="logo Yến sào vui"
              className={cn("top-[18px] absolute left-0", {
                "left-[26px] w-[100px] h-9": url == "/contact",
              })}
            />
          )}
        </Link>
        <div className="py-2.5 gap-9 w-full lg:flex hidden items-center justify-center">
          <HeaderLinks />
        </div>
        <Cart />
      </div>
    </header>
  );
}
