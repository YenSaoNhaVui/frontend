"use client";
import CardFeedBack from "@/components/card-feedback/card-feedback";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings} className="w-4/5 mx-auto">
        <div className="px-2">
          <CardFeedBack />
        </div>
        <div className="px-2">
          <CardFeedBack />
        </div>
        <div className="px-2">
          <CardFeedBack />
        </div>
        <div className="px-2">
          <CardFeedBack />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
