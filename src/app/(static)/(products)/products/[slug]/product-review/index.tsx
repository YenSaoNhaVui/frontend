import { useState } from "react";
import ProductRate from "./product-rate";
import ProductFormReivew from "./product-form-review";
import Reviews from "./reviews";
import { Product } from "@/interfaces";

export default function ProductReview({ product }: { product: Product }) {
  const [star, setStar] = useState<number>(0);
  const [comments, setComments] = useState<any>(product?.comments?.sort((a, b) => b.id - a.id));
  return (
    <section className="mt-1.5 text-primary-1-7 mb-[56px]">
      <h3 className="text-primary-1-7 mb-5">
        Đánh giá sản phẩm <span className="!text-primary-1-5">“{product?.title}”</span>
      </h3>
      <p className="text-body-md-medium mb-5">
        Đánh giá của quý khách sẽ giúp cho Yến Nhà Vui cải thiện chất lượng sản phẩm và dịch vụ ngày càng
        tốt hơn.
        <br />
        <br />
        Để bảo vệ danh tính của quý khách, đánh giá sẽ không hiện thông tin số điện thoại của quý khách.
        Quý khách vui lòng điền đầy đủ thông tin có đánh dấu sao (*) để Yến Nhà Vui có thể hỗ trợ quý
        khách một cách tốt nhất.
      </p>
      <ProductRate setStars={setStar} star={star} />
      <ProductFormReivew
        star={star}
        setComments={setComments}
        setStar={setStar}
        productId={product?.id}
      />
      <div className="my-5 border-t border-primary-1-5" />
      <Reviews comments={comments} />
    </section>
  );
}
