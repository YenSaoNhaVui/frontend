"use client";

import { Button } from "@/components/ui/button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { ArrowLeftIcon, ArrowRightIcon, ArrowRightStraightIcon } from "@/components/icons";
import Icon from "@/components/ui/icon";
import ProductCard from "@/components/product-card";

export default function ProductOutstanding() {
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
    ],
  };
  const slider = useRef(null);
  return (
    <section
      className="lg:bg-cover bg-contain bg-black bg-no-repeat text-white lg:pt-[60px] -mt-[80px] overflow-hidden relative [&_p]:text-justify"
      style={{
        backgroundImage: `url('https://ucarecdn.com/5e16ca16-31a2-4300-86e3-23faad4838a1/-/quality/smart/-/format/auto/')`,
      }}
    >
      <h1 className="mt-[98px] lg:mb-[126px] mb-[25px] font-street-sign-sans lg:!text-[128px] !text-[45px] !leading-normal text-center text-[#FAD743] !font-normal">
        SẢN PHẨM NỔI BẬT
      </h1>
      <div className="lg:mb-[90px] mb-[76px] lg:max-w-[1064px] max-w-[365px] mx-auto relative">
        <div className="absolute -left-24 lg:flex hidden items-center top-0 h-full ">
          <Button
            onClick={() => (slider as any).current.slickPrev()}
            variant="ghost"
            className="shadow-[0px_3px_4px_0px_rgba(0,0,0,0.15)] !bg-white"
          >
            <Icon size="lg">
              <ArrowLeftIcon />
            </Icon>
          </Button>
        </div>
        <Slider
          ref={slider}
          {...settings}
          className="[&_.slick-slide]:lg:px-5 [&_.slick-slide]:px-[14px] [&_button]:!hidden"
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Slider>
        <div className="absolute -right-14 lg:flex hidden items-center top-0 h-full">
          <Button
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
      <div className="flex justify-center lg:mb-[107px] mb-7">
        <Button
          variant="ghost"
          className="items-center border border-solid border-[#FAD743] hover:!bg-transparent !text-[#FAD743]"
        >
          Xem thêm
          <Icon className="!w-[25px] !h-[25px] ml-1">
            <ArrowRightStraightIcon />
          </Icon>
        </Button>
      </div>
    </section>
  );
}
