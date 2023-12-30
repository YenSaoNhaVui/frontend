"use client";

import { ArrowRightStraightIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { StaticData } from "@/interfaces";
import { cn } from "@/utils";
import { useStatic } from "@/zustand";
import Link from "next/link";

export default function ProductProcess({ data }: { data: StaticData }) {
  return (
    <div className="lg:mt-[214px] mt-[50px] grid lg:grid-cols-2 gap-[30px] lg:ml-[80px] items-center">
      <div className="lg:mx-0 mx-6">
        <h5 className="lg:mt-[0px] mt-[30px] mb-4">QUY TRÌNH SẢN XUẤT</h5>
        <h3 className="mb-4 text-[#FAD743] lg:!text-[60px] !text-[50px] !font-normal !leading-normal font-street-sign-sans">
          NGHIÊM NGẶT, ĐẢM BẢO AN TOÀN VỆ SINH THỰC PHẨM
        </h3>
        <p className="text-body-md-medium text-[#9EFEE0] mb-4">
          Thương hiệu {`"Yến Sào Nhà Vui"`} đã ghi dấu ấn mạnh mẽ trong lĩnh vực Yến sào trong suốt 10
          năm qua. Chúng tôi tự hào cung cấp các sản phẩm Yến sào tự nhiên, không qua bất kỳ quá trình
          chế biến hay xử lý hóa học nào, để đảm bảo giữ nguyên toàn bộ giá trị dinh dưỡng và hương vị
          đặc biệt của loại thực phẩm này.
        </p>
        <Link href="/about">
          <Button
            aria-label="See more/xem thêm button"
            title="See more/xem thêm"
            variant="ghost"
            className="!text-[#EED670] !underline hover:bg-transparent !p-0"
          >
            Xem thêm
            <Icon size="lg" className="ml-1">
              <ArrowRightStraightIcon />
            </Icon>
          </Button>
        </Link>
      </div>
      <ImagesYenSao data={data} />
    </div>
  );
}

export function ImagesYenSao({ className, data }: { className?: string; data?: StaticData }) {
  const { videoIntroduce } = useStatic((s) => s.staticData);
  const videoIntro = data?.videoIntroduce || videoIntroduce;
  return (
    <div className="justify-center flex flex-1 relative">
      {(videoIntro as any)?.type == "video" ? (
        <div className={cn("lg:w-[370px] lg:h-[658px] w-[327px] h-[581px] relative", className)}>
          <video
            src={(videoIntro as any)?.url}
            muted
            autoPlay
            controls
            loop
            className="absolute top-0 left-0 w-full h-full object-contain rounded-xl"
          />
        </div>
      ) : (
        <div className="w-[315px] h-[560px] relative">
          <img
            src={(videoIntro as any)?.url + "-/format/webp/"}
            className="absolute top-0 left-0 w-full h-full object-cover lg:rounded-xl"
          />
        </div>
      )}
    </div>
  );
}
