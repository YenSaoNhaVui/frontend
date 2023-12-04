"use client";
import Link from "next/link";
import { PlusIcon } from "../icons";
import { Button } from "../ui/button";
import Icon from "../ui/icon";
import { cn, formatPrice } from "@/utils";
import { Product } from "@/interfaces";
import { useCart } from "@/zustand";
import { App } from "antd";

interface Props {
  className?: string;
  product?: Product;
}

export default function ProductCard({ className, product }: Props) {
  const addProduct = useCart((state) => state.addProductCarts);
  const { message } = App.useApp();

  return (
    <div className={cn("w-full", className)}>
      <Link href={"/products/" + (product?.id || "")} className="cursor-pointer">
        <figure className="pt-[100%] relative bg-[#F2D65C] rounded-t-xl">
          <img
            className="w-[calc(100%-24px)] h-[calc(100%-32px)] absolute top-0 left-0 right-0 mx-auto bottom-0 my-auto object-cover rounded-lg"
            src={product?.images[0] as string}
            alt={product?.title}
          />
        </figure>
      </Link>
      <div className="p-2.5 bg-primary-1-8 rounded-b-lg">
        <div className="flex items-start justify-between">
          <p className="text-body-sm-medium text-secondary-5">Hộp quà</p>
        </div>
        <Link href={`/products/${product?.id || 123}`}>
          <h6 className="text-primary-2-5 mb-[30px] lg:text-xl !text-body-sm-semibold lg:line-clamp-2 line-clamp-3 lg:h-[44px] h-[66px]">
            {product?.title}
          </h6>
        </Link>
        <div className="flex items-center justify-between">
          {product?.prices?.[0]?.price != product?.prices?.[0]?.listPrice ? (
            <p className="lg:text-body-lg-semibold text-body-md-semibold text-primary-2-5 flex-1">
              {formatPrice(product.prices?.[0]?.listPrice, false)}
            </p>
          ) : (
            <p className="text-body-lg-semibold text-primary-2-5 flex-1">
              {formatPrice(product?.prices?.[0]?.price || 0, false)}
            </p>
          )}

          <Button
            className="!p-0 !w-8 !h-8 !bg-white hover:!bg-white/90"
            onClick={() => {
              addProduct({ product, quantity: 1, variant: product.prices?.[0] });
              message.success("Đã thêm vào giỏ hàng!");
            }}
          >
            <Icon size="sm" className="[&_path]:!fill-[#3ABF9C]">
              <PlusIcon />
            </Icon>
          </Button>
        </div>
      </div>
    </div>
  );
}
