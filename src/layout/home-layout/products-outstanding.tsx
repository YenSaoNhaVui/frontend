"use client";

import { Button } from "@/components/ui/button";
import Slider from "react-slick";
import { useRef } from "react";
import { ArrowLeftIcon, ArrowRightIcon, ArrowRightStraightIcon } from "@/components/icons";
import Icon from "@/components/ui/icon";
import ProductCard from "@/components/product-card";
import useAsync from "@/hooks/use-async";
import { getHighlightProducts } from "@/service";
import { Product } from "@/interfaces";
import ProductCardLoading from "@/components/product-card/loading";
import Link from "next/link";
import { useClient } from "@/hooks";
import { Spin } from "antd";

export default function ProductOutstanding({ products }: { products: Product[] }) {
  const { data: highlightProducts, loading } = useAsync<Product[]>(() => getHighlightProducts());
  const settings = {
    dots: false,
    // infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  const slider = useRef(null);
  const { isClient } = useClient();
  return (
    <section
      className="bg-cover bg-black bg-no-repeat text-white lg:pt-[60px] overflow-hidden relative [&_p]:text-justify z-[1]"
      style={{
        backgroundImage: `url('https://ucarecdn.com/153a2759-a4ac-47a4-935e-edf7de950044/-/format/webp/')`,
      }}
    >
      <img
        src="https://ucarecdn.com/40cc2fc4-c681-4efe-906f-c07fca244415/"
        className="absolute left-0 top-5 animation-logo right-0 mx-auto h-[75px] w-[30px] sm:hidden block z-[20]"
        alt="logo"
      />
      <h1 className="lg:mt-[98px] mt-[140px] lg:mb-[48px] font-street-sign-sans lg:!text-[128px] !text-[45px] !leading-normal text-center text-[#FAD743] !font-normal">
        SẢN PHẨM NỔI BẬT
      </h1>
      <div className="lg:mb-[100px] mb-0 xl:max-w-[1280px] lg:max-w-[800px] sm:max-w-[640px] max-w-[365px] mx-auto relative">
        <div className="absolute -left-16 lg:flex hidden items-center top-0 h-full ">
          <Button
            aria-label="Prev button"
            title="Prev"
            onClick={() => (slider as any).current.slickPrev()}
            variant="ghost"
            className="shadow-[0px_3px_4px_0px_rgba(0,0,0,0.15)] !bg-white"
          >
            <Icon size="lg">
              <ArrowLeftIcon />
            </Icon>
          </Button>
        </div>
        {!isClient ? (
          <div className="h-[150px] flex items-center justify-center">
            <Spin size="large" />
          </div>
        ) : (
          <Slider
            ref={slider}
            {...settings}
            className="[&_.slick-slide]:lg:px-5 [&_.slick-slide]:px-[14px] [&_.slick-arrow]:!hidden [&_.slick-list]:lg:h-[500px] [&_.slick-list]:sm:h-[450px] [&_.slick-list]:h-[400px] [&_.slick-list]:xl:pt-14 [&_.slick-list]:lg:pt-[100px] [&_.slick-list]:pt-[50px]"
          >
            {loading && products?.length == 0
              ? [1, 2, 3, 4, 5, 6, 7, 8]?.map((i) => <ProductCardLoading key={i} />)
              : helper(products?.length != 0 ? products : highlightProducts).map((product, i) => (
                  <ProductCard isHover={true} key={i} product={product} />
                ))}
          </Slider>
        )}
        <div className="absolute -right-14 lg:flex hidden items-center top-0 h-full">
          <Button
            aria-label="Next button"
            title="Next"
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
      <div className="flex justify-center lg:mb-[107px] mb-7 lg:mt-0 mt-4">
        <Link href="/products">
          <Button
            variant="ghost"
            className="items-center border border-solid border-[#FAD743] hover:!bg-transparent !text-[#FAD743]"
          >
            Xem thêm
            <Icon className="!w-[25px] !h-[25px] ml-1">
              <ArrowRightStraightIcon />
            </Icon>
          </Button>
        </Link>
      </div>
    </section>
  );
}

function helper(arr: any[]) {
  if (!arr) return [];
  const currentLength = arr.length;
  const remainder = currentLength % 4;

  if (remainder !== 0) {
    // Calculate the number of elements to duplicate
    const elementsToDuplicate = 4 - remainder;

    // Duplicate elements to make the length a multiple of 4
    arr = arr.concat(arr.slice(0, elementsToDuplicate));
  }

  return arr;
}
