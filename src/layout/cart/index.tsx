import { CartIcon } from "@/components/icons";
import Icon from "@/components/ui/icon";
import Badge from "./badge-cart";
import { usePathname } from "next/navigation";
import { cn } from "@/utils";
import Link from "next/link";

export default function Cart() {
  const url = usePathname();

  return (
    <div
      className={cn("absolute top-2 right-0", {
        "top-3": url != "/",
      })}
    >
      <Link href="/cart">
        <Badge content={0}>
          <Icon className="!w-[34px] !h-[34px]">
            <CartIcon />
          </Icon>
        </Badge>
      </Link>
    </div>
  );
}
