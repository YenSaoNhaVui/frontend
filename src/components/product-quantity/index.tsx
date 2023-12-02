import { useCart } from "@/zustand";
import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from "../icons";
import { Button } from "../ui/button";
import Icon from "../ui/icon";

interface Props {
  id?: number;
  isCheckout?: boolean;
  quantity?: number;
  onChange?: (e: number) => void;
}

export default function ProductQuantity({ id, isCheckout, quantity, onChange }: Props) {
  const updateQuantity = useCart((state) => state.updateQuantity);
  return (
    <div className="flex items-center col-span-2 gap-4 [&_path]:!stroke-primary-1-5">
      {!isCheckout && (
        <Button
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
      <p className="px-[1px] py-2 rounded-md bg-white text-body-sm-normal text-primary-1-5 min-w-[38px] text-center">
        {quantity}
      </p>
      {!isCheckout && (
        <Button
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
