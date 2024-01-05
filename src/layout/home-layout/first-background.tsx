"use client";

import { StaticData } from "@/interfaces";
import { Carousel } from "antd";
import Link from "next/link";
import Image from "next/image";
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
  const imageLoader = ({ src, width, quality }) => {
    return `${src}/-/quality/better/-/format/webp/-/progressive/yes/`;
  };
  return (
    <div className="overflow-hidden max-w-[100vw] block">
      <Carousel autoplay={true} className="lg:!hidden !block ">
        {backgroundsMobile?.map((url) => (
          <Link key={url} href="https://collection.yensaonhavui.vn" target="_blank" className="!block">
            <div className="lg:h-[750px] sm:h-[540px] small:h-[315px] h-[250px] relative ">
              <Image
                fill
                loader={imageLoader}
                src={url}
                loading="lazy"
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
          </Link>
        ))}
      </Carousel>
      <Carousel autoplay={true} className="!hidden lg:!block">
        {backgroundsPC?.map((url) => (
          <Link key={url} href="https://collection.yensaonhavui.vn" target="_blank" className="!block">
            <div className="lg:h-[750px] sm:h-[540px] small:h-[315px] h-[250px] relative">
              <Image
                fill
                loader={imageLoader}
                loading="lazy"
                src={url}
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
          </Link>
        ))}
      </Carousel>
    </div>
  );
}
