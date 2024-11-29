import ProductQuantity from "@/components/product-quantity";
import { Button } from "@/components/ui/button";
import { Product } from "@/interfaces";
import { formatPrice } from "@/utils";
import { useCart } from "@/zustand";
import { message } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProductInfo({ product }: { product: Product }) {
  const addProductCarts = useCart((state) => state.addProductCarts);
  const router = useRouter();
  const [quantity, setQuantity] = useState<number>(1);
  const [variantId, setVariantId] = useState<number>(0);
  return (
    <section className="flex-1 w-full text-primary-1-7">
      <h3 className="">{product?.title}</h3>
      <h4>
        {product.prices?.[variantId]?.listPrice != product.prices?.[variantId]?.price ? (
          <div className="flex items-start gap-2 flex-wrap">
            <p className="!text-body-lg-semibold">
              <s>{formatPrice(product.prices?.[variantId]?.price, true)}</s>
            </p>
            {formatPrice(product.prices?.[variantId]?.listPrice, true)}
          </div>
        ) : (
          formatPrice(product.prices?.[variantId]?.price, true)
        )}
      </h4>
      <div className="mt-4 mb-8">
        <p className="text-body-md-semibold ">Trọng lượng</p>
        <div className="border-t border-solid border-[#204F4F] my-2" />
        <div className="flex items-center gap-1.5">
          {product?.prices?.map((variant1, i) => (
            <Button
              aria-label="Variant/Biến thê button"
              title="Variant/Biến thê"
              onClick={() => setVariantId(i)}
              key={i}
              variant="outlined"
              className={
                variantId == i
                  ? "!px-2 !py-2.5 !rounded !text-[12px] !leading-[16px] !text-primary-1-5 !font-semibold !bg-white"
                  : "!px-2 !py-2.5 !rounded !text-[12px] !leading-[16px] !text-primary-1-5 !font-semibold !border-neutral-4"
              }
            >
              {variant1.weight}
            </Button>
          ))}
        </div>
      </div>
      <div className="mb-8">
        <p className="text-body-md-semibold "> Số lượng </p>
        <div className="border-t border-solid border-[#204F4F] my-2" />
        <ProductQuantity quantity={quantity} onChange={(e) => setQuantity(e)} />
      </div>
      <div className="mb-4">
        <p className="text-body-md-semibold ">Mô tả sản phẩm</p>
        <div className="border-t border-solid border-[#204F4F] my-2" />
        <p className="text-body-sm-normal">{product?.description}</p>
      </div>
      <div className="flex items-center gap-4">
        <Button
          aria-label="Cart/giỏ hàng button"
          title="Cart/giỏ hàng"
          variant="outlined"
          rounded="md"
          className="!px-2 !py-2.5 !text-[16px] !leading-[24px] !text-primary-1-5 !font-semibold !bg-white flex-1"
          onClick={() => {
            addProductCarts({ product, quantity, variant: product.prices[variantId] });
            message.success("Đã thêm vào giỏ hàng!");
          }}
        >
          Thêm giỏ hàng
        </Button>
        <Button
          aria-label="Buy/Mua hàng button"
          title="Buy/Mua hàng"
          className="flex-1 w-full text-primary-2-5 !bg-primary-1-7 hover:!bg-primary-1-8"
          rounded="md"
          onClick={() => {
            addProductCarts({ product, quantity, variant: product.prices[variantId] });
            router.push("/cart");
          }}
        >
          Mua ngay
        </Button>
      </div>
    </section>
  );
}
