import ProductQuantity from "@/components/product-quantity";
import { Button } from "@/components/ui/button";
import { Product } from "@/interfaces";
import { useState } from "react";

export default function ProductInfo({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState<number>(1);
  const [variant, setVariant] = useState<number>(0);
  return (
    <section className="flex-1 w-full text-primary-1-7">
      <h3 className="">{product?.title}</h3>
      <h4 className="">{new Intl.NumberFormat("vi-VN").format(product.price)} VNĐ</h4>
      <div className="mt-4 mb-8">
        <p className="text-body-md-semibold ">Trọng lượng</p>
        <div className="border-t border-solid border-[#204F4F] my-2" />
        <div className="flex items-center gap-1.5">
          {product?.weights?.map((weight, i) => (
            <Button
              onClick={() => setVariant(i)}
              key={weight}
              variant="outlined"
              className={
                variant == i
                  ? "!px-2 !py-2.5 !rounded !text-[12px] !leading-[16px] !text-primary-1-5 !font-semibold !bg-white"
                  : "!px-2 !py-2.5 !rounded !text-[12px] !leading-[16px] !text-primary-1-5 !font-semibold !border-neutral-4"
              }
            >
              {weight < 0 ? weight * 100 : weight} {weight < 0 ? "gam" : "kg"}
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
          variant="outlined"
          rounded="md"
          className="!px-2 !py-2.5 !text-[16px] !leading-[24px] !text-primary-1-5 !font-semibold !bg-white flex-1"
        >
          Thêm giỏ hàng
        </Button>
        <Button
          className="flex-1 w-full text-primary-2-5 !bg-primary-1-7 hover:!bg-primary-1-8"
          rounded="md"
        >
          Mua ngay
        </Button>
      </div>
    </section>
  );
}
