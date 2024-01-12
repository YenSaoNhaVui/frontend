"use client";
import { CartIcon } from "@/components/icons";
import Icon from "@/components/ui/icon";
import Badge from "./badge-cart";
import { usePathname } from "next/navigation";
import { cn } from "@/utils";
import Link from "next/link";
import { useCart } from "@/zustand";
import { useClient } from "@/hooks";

export default function Cart() {
  const url = usePathname();
  const productCarts = useCart((state) => state.productCarts);

  return (
    <div
      className={cn("lg:absolute relative lg:top-3 xl:right-0 right-4", {
        "lg:top-3": url != "/",
      })}
    >
      <Link href="/cart">
        <Badge content={productCarts.length || 0}>
          <Icon className="lg:!w-[34px] lg:!h-[34px] !h-[18px] !w-[18px]">
            <CartIcon />
          </Icon>
        </Badge>
      </Link>
    </div>
  );
}
