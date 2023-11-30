import Link from "next/link";
import { PlusIcon } from "../icons";
import { Button } from "../ui/button";
import Icon from "../ui/icon";
import { cn } from "@/utils";
import { Product } from "@/interfaces";

interface Props {
  className?: string;
  product?: Product;
}

export default function ProductCard({ className, product }: Props) {
  return (
    <div className={cn("w-full", className)}>
      <figure className="pt-[100%] relative bg-[#F2D65C] rounded-t-xl">
        <img
          className="w-[calc(100%-24px)] h-[calc(100%-32px)] absolute top-0 left-0 right-0 mx-auto bottom-0 my-auto object-cover rounded-lg"
          src={product?.images[0] as string}
          alt={product?.title}
        />
      </figure>
      <div className="p-2.5 bg-primary-1-8 rounded-b-lg">
        <div className="flex items-start justify-between">
          <p className="text-body-sm-medium text-secondary-5">Hộp quà</p>
          <div className="py-[1px] px-[5px] rounded-[3px] bg-success-2">
            <p className="text-body-xs-medium text-success-9">SALE</p>
          </div>
        </div>
        <Link href={`/products/${product?.id || 123}`}>
          <h6 className="text-primary-2-5 mb-[30px]">{product?.title}</h6>
        </Link>
        <div className="flex items-center justify-between">
          <p className="text-body-lg-semibold text-primary-2-5 flex-1">
            {new Intl.NumberFormat("vi-VN").format(product?.price || 0)}
          </p>
          <Button className="!p-0 !w-8 !h-8 !bg-white hover:!bg-white/90">
            <Icon size="sm" className="[&_path]:!fill-[#3ABF9C]">
              <PlusIcon />
            </Icon>
          </Button>
        </div>
      </div>
    </div>
  );
}
