import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";
import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Category, Product } from "@/interfaces";

export default function MoreProducts({ product }: { product: Product }) {
  return (
    <div className="mb-[56px]">
      <h3 className="text-center text-primary-1-7">SẢN PHẨM TƯƠNG TỰ</h3>
      <div className="my-[22px] flex items-center gap-6">
        <Button variant="ghost" className="shadow-[0px_3px_4px_0px_rgba(0,0,0,0.15)]">
          <Icon size="lg">
            <ArrowLeftIcon />
          </Icon>
        </Button>
        <div className="flex-1 flex overflow-auto hidden-scrollbar gap-6">
          {(product?.categories[0] as Category)?.products?.map((product) => (
            <ProductCard key={product?.id} product={product} className="min-w-[198px] max-w-[198px]" />
          ))}
        </div>
        <Button variant="ghost" className="shadow-[0px_3px_4px_0px_rgba(0,0,0,0.15)] ">
          <Icon>
            <ArrowRightIcon />
          </Icon>
        </Button>
      </div>
    </div>
  );
}
