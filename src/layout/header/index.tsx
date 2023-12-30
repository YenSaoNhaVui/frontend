import { cn } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Cart from "../cart";
import DropDownMenu from "./drop-down-menu";
import HeaderLinks from "./header-links";
import { useCallback, useEffect, useState } from "react";
import Icon from "@/components/ui/icon";
import { LogoYen, LogoYenNhaVui } from "@/components/icons/logo";

export default function Header() {
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const url = usePathname();

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    if (scrollTop > 300) setIsScroll(true);
    else setIsScroll(false);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const logoHome = ["/", "/about"];
  return (
    <header
      className={cn("sticky bg-transparent top-0 left-0 right-0 w-full text-neutral-1 z-[50]", {
        "bg-primary-1-7": url != "/" && url != "/about",
        "bg-[rgb(1,37,38)]": isScroll && (url == "/" || url == "/about"),
      })}
    >
      <div className="w-full flex items-center lg:justify-center justify-between relative lg:py-0 p-7 mx-auto lg:max-w-[1024px] xl:max-w-[1280px]">
        <DropDownMenu />
        <Link href="/" className="lg:hidden flex gap-1.5 items-center">
          <img
            src="https://ucarecdn.com/40cc2fc4-c681-4efe-906f-c07fca244415/-/format/webp/-/progressive/yes/"
            className="w-2.5 h-[25px] object-contain"
            alt="logo"
          />
          <img
            src="https://ucarecdn.com/d3ab7569-1dc3-4478-8861-eb6a6d78375e/-/format/webp/-/progressive/yes/"
            alt="logo Yến sào vui"
            className="w-[65px] h-6 object-contain"
          />
        </Link>
        <Link href="/" className="lg:block hidden">
          <Icon
            className={cn("absolute left-0 top-[11px]", {
              "w-[17px] h-10 top-[9px]": logoHome.indexOf(url) == -1,
              "animation-logo !w-[61px] !h-[146px]": logoHome.indexOf(url) != -1 && !isScroll,
              "!w-[100px] !h-9": isScroll,
            })}
          >
            {logoHome.indexOf(url) == -1 || !isScroll ? <LogoYen /> : <LogoYenNhaVui />}
          </Icon>
          {logoHome.indexOf(url) == -1 && (
            <Icon
              className={cn("top-[11px] absolute left-0", {
                "left-[26px] w-[100px] h-9": logoHome.indexOf(url) == -1,
              })}
            >
              <LogoYenNhaVui />
            </Icon>
          )}
        </Link>
        <div className="py-4 gap-9 w-full lg:flex hidden items-center justify-center">
          <HeaderLinks />
        </div>
        <Cart />
      </div>
    </header>
  );
}
