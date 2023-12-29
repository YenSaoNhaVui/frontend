"use client";
import BreadCrumbs from "@/components/bread-crumbs";
import { Button } from "@/components/ui/button";
import { useClient } from "@/hooks";
import { Spin } from "antd";
import { useState } from "react";
import FormCheckout from "./form-checkout";
import CartProducts from "./products";

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
        <FormCheckout />
      ) : (
        <div className="flex justify-end">
          <Button
            aria-label="Payment/Thanh toán button"
            title="Payment/Thanh toán"
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
