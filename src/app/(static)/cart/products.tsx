import ProductQuantity from "@/components/product-quantity";
import { Button } from "@/components/ui/button";
import { cn, formatPrice } from "@/utils";
import { useCart } from "@/zustand";

export default function CartProducts({ isCheckout }: { isCheckout: boolean }) {
  const productCarts = useCart((state) => state.productCarts);
  let totalPrice = 0;
  productCarts.forEach((item) => (totalPrice += (item?.variant?.listPrice ?? 0) * item.quantity));
  console.log(productCarts);
  return (
    <div className="mt-7 mb-8 [&_p]:mb-0">
      <div className="grid grid-cols-8 pb-2.5 border-b border-solid border-black">
        {["", "Sản phẩm", "Số lượng", "Giá tiền"]?.map((title, i) => (
          <p
            key={i}
            className={cn("text-body-lg-semibold text-primary-1-7", {
              "col-span-4": i == 1,
              "col-span-2": i == 2,
            })}
          >
            {title}
          </p>
        ))}
      </div>
      {productCarts?.map((productCart, i) => (
        <div key={i} className="grid grid-cols-8 py-2.5 border-b border-solid border-black">
          <figure className="relative min-w-[120px] max-w-[120px] min-h-[120px] max-h-[120px] rounded-lg overflow-hidden m-0">
            <img
              src={productCart?.product.images?.[0] as string}
              alt={productCart?.product.title}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </figure>
          <div className="mt-5 col-span-4 flex flex-col justify-between">
            <div>
              <h5 className="text-primary-1-7 mb-0">{productCart?.product.title}</h5>
              <p className="text-primary-1-7 text-body-lg-normal">50 gram</p>
            </div>
            <Button
              variant="ghost"
              className="!text-primary-1-7/50 hover:!text-primary-1-7 text-body-lg-normal !p-0 !w-[30px] hover:!bg-transparent"
            >
              Xóa
            </Button>
          </div>
          <ProductQuantity id={i} quantity={productCart.quantity} isCheckout={isCheckout} />
          <p className="text-body-lg-semibold text-primary-1-7 flex items-center">
            {formatPrice(productCart.variant?.listPrice, false) ? (
              <>
                {formatPrice(productCart.variant?.listPrice, false)}
                <sup>
                  <s>{formatPrice(productCart.variant?.price, false)}</s>
                </sup>
              </>
            ) : (
              formatPrice(productCart.variant?.price, false)
            )}
          </p>
        </div>
      ))}
      <div className="grid grid-cols-8 py-12 border-b border-solid border-black">
        <span />
        <span className="col-span-4" />
        <p className="text-body-lg-semibold text-primary-1-7 col-span-2">Tổng cộng</p>
        <p className="text-body-lg-semibold text-primary-1-7 flex items-center">
          {formatPrice(totalPrice, false)}
        </p>
      </div>
    </div>
  );
}
