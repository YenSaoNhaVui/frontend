import ProductQuantity from "@/components/product-quantity";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/utils";
import { ProductCart, useCart } from "@/zustand";

export function ProductDesktop({
  productCart,
  i,
  isCheckout,
}: {
  productCart: ProductCart;
  i: number;
  isCheckout: boolean;
}) {
  const { removeProductCarts } = useCart();
  return (
    <div className="lg:grid hidden grid-cols-8 py-2.5 border-b border-solid border-black">
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
          <p className="text-primary-1-7 text-body-lg-normal">{productCart.variant.weight}</p>
        </div>
        <Button
          variant="ghost"
          className="!text-primary-1-7/50 hover:!text-primary-1-7 text-body-lg-normal !p-0 !w-[30px] hover:!bg-transparent"
          onClick={() => removeProductCarts(i)}
        >
          Xóa
        </Button>
      </div>
      <ProductQuantity id={i} quantity={productCart.quantity} isCheckout={isCheckout} />
      <p className="text-body-lg-semibold text-primary-1-7 flex items-center col-span-2 justify-center">
        {productCart.variant?.listPrice != productCart.variant?.price ? (
          <>
            {formatPrice(productCart.variant?.listPrice, true)}
            <sup className="ml-1">
              <s>{formatPrice(productCart.variant?.price, true)}</s>
            </sup>
          </>
        ) : (
          formatPrice(productCart.variant?.price, true)
        )}
      </p>
    </div>
  );
}

export function ProductMobile({
  productCart,
  i,
  isCheckout,
}: {
  productCart: ProductCart;
  i: number;
  isCheckout: boolean;
}) {
  const { removeProductCarts } = useCart();
  return (
    <div className="lg:hidden flex gap-[33px] py-2 border-b border-black">
      <figure className="relative max-w-[126px] min-w-[126px] h-[180px] w-full rounded-lg overflow-hidden m-0">
        <img
          src={productCart?.product.images?.[0] as string}
          alt={productCart?.product.title}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </figure>
      <div className="">
        <h5 className="text-primary-1-7 mb-0 lg:text-sm !text-body-lg-semibold line-clamp-1">
          {productCart?.product.title}
        </h5>
        <p className="text-primary-1-7 text-body-lg-normal !mb-[13px]">{productCart.variant.weight}</p>
        <ProductQuantity id={i} quantity={productCart.quantity} isCheckout={isCheckout} />
        <p className="text-body-lg-semibold text-primary-1-7 flex !my-[14px]">
          {formatPrice(productCart.variant?.price, false)}
        </p>
        <Button
          variant="ghost"
          className="!text-primary-1-7/50 hover:!text-primary-1-7 lg:text-body-lg-normal text-body-sm-normal !p-0 !w-[30px] hover:!bg-transparent"
          onClick={() => removeProductCarts(i)}
        >
          Xóa
        </Button>
      </div>
    </div>
  );
}
