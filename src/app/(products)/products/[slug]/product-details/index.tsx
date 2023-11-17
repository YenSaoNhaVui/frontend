import ProductImages from "./product-images";
import ProductInfo from "./product-info";

export default function ProductDetails() {
  return (
    <div className="flex lg:flex-row flex-col lg:gap-10 gap-[30px] lg:mb-[42px] mb-[30px]">
      <ProductImages />
      <ProductInfo />
    </div>
  );
}
