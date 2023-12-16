import { ArrowRightStraightIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { cn } from "@/utils";
import Link from "next/link";

export default function ProductProcess() {
  return (
    <div className="lg:mt-[214px] mt-[50px] flex lg:flex-row flex-col-reverse gap-[30px] lg:ml-[80px]">
      <div className="flex-1 lg:mx-0 mx-6">
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
          <Button variant="ghost" className="!text-[#EED670] !underline hover:bg-transparent !p-0">
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
  return (
    <div className="flex-1 lg:justify-end justify-center flex">
      <img
        src="https://ucarecdn.com/dd2c495e-3914-46b6-b689-ac450f9f137a/"
        className="lg:block hidden w-[710px] h-[648px] max-h-[648px]"
      />
      <img
        src="https://ucarecdn.com/bfe70498-ddbf-483a-b298-58a10168cb54/"
        className="lg:hidden block"
        alt="Giới thiệu"
      />
    </div>
    // <div
    //   className={cn(
    //     "relative flex-1 xl:h-[684px] xl:min-h-[0px] xl:max-h-full lg:min-h-[450px] lg:max-h-[450px] min-h-[377px] max-h-[377px]",
    //     className
    //   )}
    // >
    //   <img
    //     src="https://ucarecdn.com/b51714e8-0828-4859-92d8-d7b4db4198c7/-/preview/500x500/-/quality/smart/-/format/auto/"
    //     className="absolute top-0 left-0 z-10 xl:w-auto xl:h-auto w-[144px] h-[145px]"
    //   />
    //   <img
    //     src="https://ucarecdn.com/0911ce36-1c53-4bc5-8594-a89a35334c6d/-/preview/500x500/-/quality/smart/-/format/auto/"
    //     className="absolute top-14 xl:left-4  left-0 z-[5] xl:w-[197px] xl:h-[229px] w-[144px] h-[116px]"
    //   />
    //   <img
    //     src="https://ucarecdn.com/d533622e-04d7-4935-bff0-5d825151bc63/-/preview/500x500/-/quality/smart/-/format/auto/"
    //     className="absolute xl:bottom-10 bottom-4 left-0 z-10 xl:w-auto xl:h-auto w-[158px] h-[184px]"
    //   />
    //   <img
    //     src="https://ucarecdn.com/5a2f23a6-26ab-45f7-be17-587eef728252/-/preview/500x500/-/quality/smart/-/format/auto/"
    //     className="absolute xl:bottom-0 -bottom-4 xl:left-4 left-0 z-[5] xl:w-[197px] xl:h-[229px] w-[158px] h-[175px]"
    //   />
    //   <img
    //     src="https://ucarecdn.com/ac01edbc-77fe-4bb3-9fa5-25f793317d26/-/preview/500x500/-/quality/smart/-/format/auto/"
    //     className="absolute xl:bottom-10 bottom-4 xl:-right-6 sm:-right-[80px] -right-[200px] z-30 xl:w-auto xl:h-auto w-[343px] h-[259px]"
    //   />
    //   <div className="bg-[#3ABF9C] xl:w-[499px] xl:h-[422px] w-[291px] h-[100px] rounded-[20px] xl:-right-[200px] sm:-right-20 -right-[180px] xl:bottom-[106px] lg:top-[120px] top-16 absolute" />
    //   <img
    //     src="https://ucarecdn.com/66289d3c-524e-405a-9c05-78e202431b5e/-/preview/500x500/-/quality/smart/-/format/auto/"
    //     className="absolute sm:-bottom-10 -bottom-6 xl:-right-[100px] sm:-right-6 -right-[140px] z-[5] xl:w-[555px] xl:h-[423px] w-[323px] h-[246px]"
    //   />
    // </div>
  );
}
