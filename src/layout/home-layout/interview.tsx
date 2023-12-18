import { ArrowRightStraightIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Link from "next/link";

export default function InterView() {
  return (
    <div className="lg:mt-[400px] mt-[116px] flex lg:flex-row flex-col lg:gap-[120px] gap-[48px] lg:mr-[80px]">
      <div className="relative">
        <div className="lg:w-[495px] lg:h-[422px] w-[303px] h-[100px] rounded-[20px] bg-[#3ABF9C] absolute z-10 lg:-top-[66px] -top-[46px] lg:-left-[159px] -left-5" />
        <div className="w-[461px] h-[301px] rounded-[20px] bg-[#3ABF9C] absolute z-10 -right-[40px] lg:block hidden" />
        <img
          src="https://ucarecdn.com/645914bd-09e6-4aa2-af41-570895cbc3b2/-/format/webp/-/progressive/yes/"
          className="relative z-30 lg:w-auto w-full"
          alt="Yến nhà vui"
        />
        <img
          src="https://ucarecdn.com/4469cadf-ecd2-4173-8465-956e2f9de08d/-/format/webp/-/progressive/yes/"
          className="absolute z-30 top-0 left-0 bottom-0 right-0 mx-auto my-auto lg:w-[127px] lg:h-[302px] w-[89px] h-[212px]"
          alt="Yến nhà vui"
        />
        <img
          src="https://ucarecdn.com/8f062bb3-e77c-48c1-89f2-4d60f7d129df/-/format/webp/-/progressive/yes/"
          className="absolute z-[10] left-0 lg:-bottom-8 -bottom-10 lg:w-auto w-full"
          alt="Yến nhà vui"
        />
      </div>
      <div className="flex-1 lg:mx-0 mx-6">
        <h5 className="mt-[41px] mb-4">GIỚI THIỆU</h5>
        <img
          src="https://ucarecdn.com/f45772e8-ef59-4712-8be9-e4428169344a/-/format/webp/-/progressive/yes/"
          className="mb-4 w-[246px] h-[88px]"
        />
        <p className="text-body-md-medium text-[#9EFEE0] mb-4">
          Thương hiệu {`"Yến Sào Nhà Vui"`} đã ghi dấu ấn mạnh mẽ trong lĩnh vực Yến sào trong suốt 10
          năm qua. Chúng tôi tự hào cung cấp các sản phẩm Yến sào tự nhiên, không qua bất kỳ quá trình
          chế biến hay xử lý hóa học nào, để đảm bảo giữ nguyên toàn bộ giá trị dinh dưỡng và hương vị
          đặc biệt của loại thực phẩm này.
        </p>
        <Link href="/about">
          <Button variant="ghost" className="!text-[#EED670] !underline hover:bg-transparent !p-0">
            Xem thêm
            <Icon size="lg" className="ml-1">
              <ArrowRightStraightIcon />
            </Icon>
          </Button>
        </Link>
      </div>
    </div>
  );
}
