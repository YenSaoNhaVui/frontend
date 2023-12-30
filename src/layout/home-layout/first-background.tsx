"use client";

import { StaticData } from "@/interfaces";
import { Carousel } from "antd";

export default function FirstBackground({ data }: { data: StaticData }) {
  const backgroundsPC = [];
  ["homeBackground", "homeBackground1", "homeBackground2", "homeBackground3", "homeBackground4"].map(
    (keys) => {
      if (data[keys]) backgroundsPC.push(data[keys]);
    }
  );
  const backgroundsMobile = [];
  [
    "homeBackgroundMobile",
    "homeBackgroundMobile1",
    "homeBackgroundMobile2",
    "homeBackgroundMobile3",
    "homeBackgroundMobile4",
  ].map((keys) => {
    if (data[keys]) backgroundsMobile.push(data[keys]);
  });
  return (
    <div className="overflow-hidden max-w-[100vw] block">
      <Carousel autoplay={true} className="lg:!hidden !block ">
        {backgroundsMobile?.map((url) => (
          <div key={url} className="lg:h-[750px] sm:h-[540px] small:h-[315px] h-[250px] relative ">
            <img
              loading="eager"
              src={`${url}/-/quality/lighter/-/format/webp/-/progressive/yes/`}
              className="absolute top-0 left-0 w-full h-full object-cover z-[1]"
              alt="Yến Sào Nhà Vui - Yến Chất Lượng và Giải Pháp Trang Thiết Bị Nhà Yến Tối Ưu"
            />
            <div
              className="absolute top-1 left-0 w-full h-full z-[20]"
              style={{
                background: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 65%, #000 100%)",
              }}
            />
          </div>
        ))}
      </Carousel>
      <Carousel autoplay={true} className="!hidden lg:!block">
        {backgroundsPC?.map((url) => (
          <div key={url} className="lg:h-[750px] sm:h-[540px] small:h-[315px] h-[250px] relative">
            <img
              loading="eager"
              src={`${url}/-/quality/lighter/-/format/webp/-/progressive/yes/`}
              className="absolute top-0 left-0 w-full h-full object-cover"
              alt="Yến Sào Nhà Vui - Yến Chất Lượng và Giải Pháp Trang Thiết Bị Nhà Yến Tối Ưu"
            />
            <div
              className="absolute top-1 left-0 w-full h-full z-[20]"
              style={{
                background: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 73.44%, #000 100%)",
              }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
