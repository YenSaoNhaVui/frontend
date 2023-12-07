import { cn, formatPrice } from "@/utils";
import { useCart } from "@/zustand";
import { ProductDesktop, ProductMobile } from "./product-card";

export default function CartProducts({ isCheckout }: { isCheckout: boolean }) {
  const { productCarts, getTotalPrice } = useCart();
  return (
    <div className="mt-7 mb-8 [&_p]:mb-0">
      <div className="lg:grid hidden grid-cols-8 pb-2.5 border-b border-solid border-black">
        {["", "Sản phẩm", "Số lượng", "Giá tiền"]?.map((title, i) => (
          <p
            key={i}
            className={cn("text-body-lg-semibold text-primary-1-7", {
              "col-span-4": i == 1,
              "col-span-2 justify-center flex": i == 3,
            })}
          >
            {title}
          </p>
        ))}
      </div>
      <div className="border-b border-black lg:hidden block" />
      {productCarts?.map((productCart, i) => (
        <div key={`${productCart?.product?.id} ${i}`}>
          <ProductDesktop productCart={productCart} i={i} isCheckout={isCheckout} />
          <ProductMobile i={i} isCheckout={isCheckout} productCart={productCart} />
        </div>
      ))}
      <div className="lg:grid lg:gap-0 gap-[26px] flex justify-end grid-cols-8 py-12 border-b border-solid border-black">
        <span />
        <span className="lg:col-span-4" />
        <p className="text-body-lg-semibold text-primary-1-7 whitespace-nowrap">Tổng cộng:</p>
        <p className="text-body-lg-semibold text-primary-1-7 lg:col-span-2 lg:block hidden whitespace-nowrap">
          {formatPrice(getTotalPrice(), true)}
        </p>
        <p className="text-body-lg-semibold text-primary-1-7 lg:col-span-2 lg:hidden block whitespace-nowrap">
          {formatPrice(getTotalPrice(), false)}
        </p>
      </div>
    </div>
  );
}
