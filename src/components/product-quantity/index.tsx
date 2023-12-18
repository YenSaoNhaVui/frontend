import { useCart } from "@/zustand";
import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from "../icons";
import { Button } from "../ui/button";
import Icon from "../ui/icon";
import { cn } from "@/utils";

interface Props {
  id?: number;
  isCheckout?: boolean;
  quantity?: number;
  onChange?: (e: number) => void;
  className?: string;
}

export default function ProductQuantity({ id, isCheckout, quantity, onChange, className }: Props) {
  const updateQuantity = useCart((state) => state.updateQuantity);
  return (
    <div className={cn("flex items-center lg:gap-4 gap-0 [&_path]:!stroke-primary-1-5", className)}>
      {!isCheckout && (
        <Button
          aria-label="Giảm sản phẩm button"
          title="Giảm sản phẩm"
          variant="ghost"
          className="!p-0 !w-6"
          onClick={() => {
            if (onChange) onChange(Math.max(quantity - 1, 1));
            else updateQuantity(id, -1);
          }}
        >
          <Icon size="lg">
            <ArrowCircleLeftIcon />
          </Icon>
        </Button>
      )}
      <p className="px-[1px] lg:py-2 rounded-md bg-white lg:text-body-sm-normal text-body-xs-normal text-primary-1-5 min-w-[38px] text-center">
        {quantity}
      </p>
      {!isCheckout && (
        <Button
          aria-label="Tăng sản phẩm button"
          title="Tăng sản phẩm"
          variant="ghost"
          className="!p-0 !w-6"
          onClick={() => {
            if (onChange) onChange(Math.max(quantity + 1, 1));
            else updateQuantity(id, 1);
          }}
        >
          <Icon size="lg">
            <ArrowCircleRightIcon />
          </Icon>
        </Button>
      )}
    </div>
  );
}
