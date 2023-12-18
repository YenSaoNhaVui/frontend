"use client";

import CardFeedBack from "@/components/card-feedback";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useRef } from "react";
import Slider from "react-slick";

export default function FeedBack() {
  const sliderFeedback = useRef(null);

  const settingsFeedback = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="lg:mt-[175px] mt-[50px]">
      <h5 className="text-center mb-4">TRẢI NGHIỆM SẢN PHẨM</h5>
      <h3 className="text-center text-[#FAD743] mb-[53px]">TRẢI NGHIỆM SẢN PHẨM</h3>
      <div className="max-w-[1136px] mx-auto mb-[80px] relative">
        <div className="lg:block flex items-center justify-center gap-4 lg:mb-0 mb-[30px]">
          <div className="lg:absolute -left-[100px] flex items-center top-0 h-full">
            <Button
              aria-label="prev/lùi button"
              title="prev/lùi"
              onClick={() => (sliderFeedback as any).current.slickPrev()}
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
              aria-label="Next/Tiếp theo button"
              title="Next/Tiếp theo"
              onClick={() => (sliderFeedback as any).current.slickNext()}
              variant="ghost"
              className="shadow-[0px_3px_4px_0px_rgba(0,0,0,0.15)] !bg-white lg:rounded-[36px] rounded-lg lg:p-0 !p-[11px]"
            >
              <Icon size="lg">
                <ArrowRightIcon />
              </Icon>
            </Button>
          </div>
        </div>
        <Slider
          ref={sliderFeedback}
          {...settingsFeedback}
          className="[&_.slick-slide]:px-[7px] [&_button]:!hidden"
        >
          <CardFeedBack />
          <CardFeedBack />
          <CardFeedBack />
          <CardFeedBack />
        </Slider>
      </div>
    </div>
  );
}
