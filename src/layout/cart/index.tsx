import { CartIcon } from "@/components/icons";
import Icon from "@/components/ui/icon";
import Badge from "./badge-cart";

export default function Cart() {
  return (
    <div className="absolute top-2 right-0">
      <Badge content={0}>
        <Icon className="!w-[34px] !h-[34px]">
          <CartIcon />
        </Icon>
      </Badge>
    </div>
  );
}
