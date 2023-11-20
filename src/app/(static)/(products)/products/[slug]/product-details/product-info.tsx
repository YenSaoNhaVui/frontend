import ProductQuantity from "@/components/product-quantity";
import { Button } from "@/components/ui/button";

export default function ProductInfo() {
  return (
    <section className="flex-1 w-full text-primary-1-7">
      <h3 className="">Yến nhà vui - 01</h3>
      <h4 className="">6.050.000</h4>
      <div className="mt-4 mb-8">
        <p className="text-body-md-semibold ">Trọng lượng</p>
        <div className="border-t border-solid border-[#204F4F] my-2" />
        <div className="flex items-center gap-1.5">
          <Button
            variant="outlined"
            className="!px-2 !py-2.5 !rounded !text-[12px] !leading-[16px] !text-primary-1-5 !font-semibold !bg-white"
          >
            50 gram
          </Button>
          <Button
            variant="outlined"
            className="!px-2 !py-2.5 !rounded !text-[12px] !leading-[16px] !text-primary-1-5 !font-semibold !border-neutral-4"
          >
            100 gram
          </Button>
        </div>
      </div>
      <div className="mb-8">
        <p className="text-body-md-semibold "> Số lượng </p>
        <div className="border-t border-solid border-[#204F4F] my-2" />
        <ProductQuantity
          product={{
            quantity: 1,
          }}
        />
      </div>
      <div className="mb-4">
        <p className="text-body-md-semibold ">Mô tả sản phẩm</p>
        <div className="border-t border-solid border-[#204F4F] my-2" />
        <p className="text-body-sm-normal">
          Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
          egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
          Suspendisse ac rhoncus nisl, eu tempor urna.{" "}
        </p>
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
