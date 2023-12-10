import ProductQuantity from "@/components/product-quantity";
import { Order } from "@/interfaces";
import { cn, formatPrice } from "@/utils";
import Link from "antd/es/typography/Link";

type Props = {
  order: Order;
};
export default function RowDetails({ order }: Props) {
  return (
    <div className="mt-7 mb-8 [&_p]:mb-0">
      <div className="grid grid-cols-8 pb-2.5 border-b border-solid border-black">
        {["", "Sản phẩm", "Số lượng", "Giá tiền"].map((title, i) => (
          <p
            key={i}
            className={cn("text-body-lg-semibold text-primary-1-7", {
              "col-span-3": i == 1,
              "col-span-2": i == 2,
            })}
          >
            {title}
          </p>
        ))}
      </div>
      {order.products?.map((productCart, i) => (
        <div key={i} className="grid grid-cols-8 py-2.5 border-b border-solid border-black">
          <Link href={"/products/" + productCart.productId}>
            <figure className="relative min-w-[80px] max-w-[80px] min-h-[80px] max-h-[80px] rounded-lg overflow-hidden m-0">
              <img
                src={productCart?.product.images?.[0] as string}
                alt={productCart?.product.title}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </figure>
          </Link>
          <div className="mt-3 col-span-3 flex flex-col justify-between">
            <div>
              <h6 className="text-primary-1-7 mb-0">{productCart?.product.title}</h6>
              <p className="text-primary-1-7 text-body-lg-normal">{productCart.variant.weight} kg</p>
            </div>
          </div>
          <ProductQuantity
            className="col-span-2"
            id={i}
            quantity={productCart.quantity}
            isCheckout={true}
          />
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
      <div className="grid grid-cols-8 py-5">
        <span />
        <span className="col-span-3" />
        <p className="text-body-lg-semibold text-primary-1-7 col-span-2">Tổng cộng</p>
        <p className="text-body-lg-semibold text-primary-1-7 flex items-center">
          {formatPrice(order.totalPrice, false)}
        </p>
      </div>
    </div>
  );
}
