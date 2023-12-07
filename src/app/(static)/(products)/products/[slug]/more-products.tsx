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
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
      <div className="my-[22px] lg:flex items-center justify-center gap-6 lg:max-w-full max-w-[450px] lg:mx-0 mx-auto relative">
        <div className="lg:hidden flex items-center justify-center gap-4 lg:mb-0 mb-[30px]">
          <div className="lg:absolute -left-[100px] flex items-center top-0 h-full">
            <Button
              onClick={() => (slider as any).current.slickPrev()}
              variant="ghost"
              className="shadow-[0px_3px_4px_0px_rgba(0,0,0,0.15)] !bg-white lg:rounded-[36px] rounded-lg lg:p-0 !p-[11px]"
            >
              <Icon size="lg">
                <ArrowLeftIcon />
              </Icon>
            </Button>
          </div>
          <div className="lg:absolute -right-[92px] flex items-center top-0 h-full">
            <Button
              onClick={() => (slider as any).current.slickNext()}
              variant="ghost"
              className="shadow-[0px_3px_4px_0px_rgba(0,0,0,0.15)] !bg-white lg:rounded-[36px] rounded-lg lg:p-0 !p-[11px]"
            >
              <Icon size="lg">
                <ArrowRightIcon />
              </Icon>
            </Button>
          </div>
        </div>
        <Button variant="ghost" className="shadow-[0px_3px_4px_0px_rgba(0,0,0,0.15)] lg:!flex !hidden">
          <Icon size="lg">
            <ArrowLeftIcon />
          </Icon>
        </Button>
        <Slider
          ref={slider}
          {...settings}
          className="[&_.slick-slide]:lg:px-5 [&_.slick-slide]:px-[12px] [&_button]:!hidden"
        >
          {(product?.categories[0] as Category)?.products?.map((product) => (
            <ProductCard
              key={product?.id}
              product={product}
              className="lg:min-w-[198px] lg:max-w-[198px] lg:w-auto w-full"
            />
          ))}
        </Slider>
        <Button variant="ghost" className="shadow-[0px_3px_4px_0px_rgba(0,0,0,0.15)] lg:!flex !hidden">
          <Icon>
            <ArrowRightIcon />
          </Icon>
        </Button>
      </div>
    </div>
  );
}
