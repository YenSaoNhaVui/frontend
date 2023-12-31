"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";
import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Category, Product } from "@/interfaces";
import { useRef } from "react";
import Slider from "react-slick";

export default function MoreProducts({ product }: { product: Product }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 410,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  const slider = useRef(null);
  return (
    <div className="mb-[56px]">
      <h3 className="text-center text-primary-1-7 lg:block hidden">SẢN PHẨM TƯƠNG TỰ</h3>
      <h5 className="text-center text-primary-1-7 lg:hidden block">SẢN PHẨM TƯƠNG TỰ</h5>
      <div className="my-[22px] lg:max-w-[864px] sm:max-w-[450px] max-w-[350px] mx-auto relative">
        <div className="flex items-center justify-center gap-4 lg:mb-0 mb-[30px]">
          <div className="lg:absolute -left-[80px] flex items-center top-0 h-full">
            <Button
              aria-label="Prev/Lùi button"
              title="Prev/Lùi"
              onClick={() => (slider as any).current.slickPrev()}
              variant="ghost"
              className="shadow-[0px_3px_4px_0px_rgba(0,0,0,0.15)] !bg-white"
            >
              <Icon size="lg">
                <ArrowLeftIcon />
              </Icon>
            </Button>
          </div>
          <div className="lg:absolute -right-[70px] flex items-center top-0 h-full">
            <Button
              aria-label="Next/Tiếp button"
              title="Next/Tiếp"
              onClick={() => (slider as any).current.slickNext()}
              variant="ghost"
              className="shadow-[0px_3px_4px_0px_rgba(0,0,0,0.15)] !bg-white"
            >
              <Icon size="lg">
                <ArrowRightIcon />
              </Icon>
            </Button>
          </div>
        </div>
        {(product?.categories[0] as Category)?.products?.length >= 4 ? (
          <Slider ref={slider} {...settings} className="[&_.slick-slide]:px-3 [&_.slick-arrow]:!hidden">
            {(product?.categories[0] as Category)?.products.slice(0, 5)?.map((_product) => (
              <ProductCard
                key={_product?.id}
                product={_product}
                category={(product?.categories?.[0] as Category)?.title}
              />
            ))}
          </Slider>
        ) : (
          <div className="flex items-center lg:gap-6 gap-4">
            {(product?.categories[0] as Category)?.products?.map((_product) => (
              <ProductCard
                key={_product?.id}
                product={_product}
                category={(product?.categories?.[0] as Category)?.title}
                className="lg:min-w-[198px] lg:max-w-[198px] lg:w-auto w-full"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
