"use client";
import BreadCrumbs from "@/components/bread-crumbs";
import { MessengerIcon, ZaloIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useClient } from "@/hooks";
import Link from "next/link";
import { useState } from "react";
import CartProducts from "./products";
import FormCheckout from "./form-checkout";
import { Spin } from "antd";

export default function CartPage() {
  const { isClient } = useClient();
  const [isCheckout, setIsCheckout] = useState<boolean>(false);
  if (!isClient)
    return (
      <div className="w-full h-[700px] flex items-center justify-center">
        <Spin />
      </div>
    );
  return (
    <section className="mt-8 xl:max-w-[1280px] xl:mx-auto sm:mx-8 mx-4 mb-[70px]">
      <BreadCrumbs linkBack="/products" titleCurrent="Giỏ hàng" titlePrev="Sản phẩm" />
      <h5 className="mt-3 text-primary-1-7">Giỏ hàng</h5>
      <CartProducts isCheckout={isCheckout} />
      {isCheckout ? (
        <>
          <FormCheckout />
          <h4 className="text-primary-1-7 flex items-center justify-center">
            Hoặc chuyển đến{" "}
            <Link href="zalo://chat?contact={USER_ID}">
              <Icon className="!w-[96px] !h-[96px] !max-w-[96px] !max-h-[96px]">
                <ZaloIcon />
              </Icon>
            </Link>{" "}
            hay{" "}
            <Link href="fb-messenger://user-thread/ty.ham.927">
              <Icon className="!w-[96px] !h-[96px] !max-w-[96px] !max-h-[96px]">
                <MessengerIcon />
              </Icon>
            </Link>{" "}
            để tiến hành thanh toán.
          </h4>
        </>
      ) : (
        <div className="flex justify-end">
          <Button
            className="!w-[440px] text-primary-2-5 !bg-primary-1-7 hover:!bg-primary-1-8"
            rounded="md"
            onClick={() => setIsCheckout(true)}
          >
            Thanh toán ngay
          </Button>
        </div>
      )}
    </section>
  );
}
