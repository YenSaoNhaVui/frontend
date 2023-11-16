import ProductImages from "./product-images";
import ProductInfo from "./product-info";

export default function ProductDetails() {
  return (
    <div className="flex gap-10 mb-[42px]">
      <ProductImages />
      <ProductInfo />
    </div>
  );
}
