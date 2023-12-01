import { Product } from "@/interfaces";
import ProductImages from "./product-images";
import ProductInfo from "./product-info";

export default function ProductDetails({ product }: { product: Product }) {
  return (
    <div className="flex lg:flex-row flex-col lg:gap-10 gap-[30px] lg:mb-[42px] mb-[30px]">
      <ProductImages product={product} />
      <ProductInfo product={product} />
    </div>
  );
}
