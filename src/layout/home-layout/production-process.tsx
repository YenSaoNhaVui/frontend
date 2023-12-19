"use client";

import { ArrowRightStraightIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useStatic } from "@/zustand";
import Link from "next/link";

export default function ProductProcess() {
  return (
    <div className="lg:mt-[214px] mt-[50px] grid lg:grid-cols-2 gap-[30px] lg:ml-[80px]">
      <div className="lg:mx-0 mx-6">
        <h5 className="xl:mt-[111px] lg:mt-[80px] mt-[30px] mb-4">QUY TRÌNH SẢN XUẤT</h5>
        <h3 className="mb-4 text-[#FAD743] lg:text-body-lg-semibold !text-[30px] !leading-[40px]">
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
      <ImagesYenSao />
    </div>
  );
}

export function ImagesYenSao({ className }: { className?: string }) {
  const { videoIntroduce } = useStatic((s) => s.staticData);

  return (
    <div className="lg:justify-end justify-center flex relative pt-[56.25%]">
      {(videoIntroduce as any)?.type == "video" ? (
        <video
          src={(videoIntroduce as any)?.url}
          muted
          autoPlay
          controls
          className="absolute top-0 left-0 w-full h-full object-contain lg:rounded-l-xl"
        />
      ) : (
        <img
          src={(videoIntroduce as any)?.url + "-/format/webp/"}
          className="absolute top-0 left-0 w-full h-full object-cover lg:rounded-l-xl"
        />
      )}
    </div>
  );
}
