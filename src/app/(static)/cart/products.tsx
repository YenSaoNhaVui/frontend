import ProductQuantity from "@/components/product-quantity";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils";

export default function CartProducts({ isCheckout }: { isCheckout: boolean }) {
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
      {products?.map((product, i) => (
        <div key={i} className="grid grid-cols-8 py-2.5 border-b border-solid border-black">
          <figure className="relative min-w-[120px] max-w-[120px] min-h-[120px] max-h-[120px] rounded-lg overflow-hidden m-0">
            <img
              src={product?.image}
              alt={product?.title}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </figure>
          <div className="mt-5 col-span-4 flex flex-col justify-between">
            <div>
              <h5 className="text-primary-1-7 mb-0">{product?.title}</h5>
              <p className="text-primary-1-7 text-body-lg-normal">50 gram</p>
            </div>
            <Button
              variant="ghost"
              className="!text-primary-1-7/50 hover:!text-primary-1-7 text-body-lg-normal !p-0 !w-[30px] hover:!bg-transparent"
            >
              Xóa
            </Button>
          </div>
          <ProductQuantity
            product={{
              quantity: 1,
            }}
            isCheckout={isCheckout}
          />
          <p className="text-body-lg-semibold text-primary-1-7 flex items-center">
            {new Intl.NumberFormat("vi-VN").format(90000000)}
          </p>
        </div>
      ))}
      <div className="grid grid-cols-8 py-12 border-b border-solid border-black">
        <span />
        <span className="col-span-4" />
        <p className="text-body-lg-semibold text-primary-1-7 col-span-2">Tổng cộng</p>
        <p className="text-body-lg-semibold text-primary-1-7 flex items-center">
          {new Intl.NumberFormat("vi-VN").format(90000000 * 3)}
        </p>
      </div>
    </div>
  );
}
const products = [
  {
    title: "Yến Nhà Vui - 01",
    weight: "100 gram",
    quantity: 1,
    price: 6500000,
    image: "https://gamek.mediacdn.vn/133514250583805952/2020/2/12/photo-1-1581478237720967319117.jpg",
  },
  {
    title: "Yến Nhà Vui - 01",
    weight: "100 gram",
    quantity: 1,
    price: 6500000,
    image: "https://gamek.mediacdn.vn/133514250583805952/2020/2/12/photo-1-1581478237720967319117.jpg",
  },
  {
    title: "Yến Nhà Vui - 01",
    weight: "100 gram",
    quantity: 1,
    price: 6500000,
    image: "https://gamek.mediacdn.vn/133514250583805952/2020/2/12/photo-1-1581478237720967319117.jpg",
  },
];
