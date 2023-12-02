import { ArrowRightStraightIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { cn } from "@/utils";

export default function ProductProcess() {
  return (
    <div className="xl:mt-[214px] mt-[50px] flex xl:flex-row flex-col-reverse gap-[30px] lg:ml-[80px]">
      <div className="flex-1 xl:mx-0 mx-6">
        <h5 className="xl:mt-[111px] mt-[30px] mb-4">QUY TRÌNH SẢN XUẤT</h5>
        <h3 className="mb-4 text-[#FAD743] lg:text-body-lg-semibold !text-[30px] !leading-[40px]">
          NGHIÊM NGẶT, ĐẢM BẢO AN TOÀN VỆ SINH THỰC PHẨM
        </h3>
        <p className="text-body-md-medium text-[#9EFEE0] mb-4">
          Thương hiệu {`"Yến Sào Nhà Vui"`} đã ghi dấu ấn mạnh mẽ trong lĩnh vực Yến sào trong suốt 10
          năm qua. Chúng tôi tự hào cung cấp các sản phẩm Yến sào tự nhiên, không qua bất kỳ quá trình
          chế biến hay xử lý hóa học nào, để đảm bảo giữ nguyên toàn bộ giá trị dinh dưỡng và hương vị
          đặc biệt của loại thực phẩm này.
        </p>
        <Button variant="ghost" className="!text-[#EED670] !underline hover:bg-transparent !p-0">
          Xem thêm
          <Icon size="lg" className="ml-1">
            <ArrowRightStraightIcon />
          </Icon>
        </Button>
      </div>
      <ImagesYenSao />
    </div>
  );
}

export function ImagesYenSao({ className }: { className?: string }) {
  return (
    <div className={cn("relative flex-1 h-[684px] xl:min-h-[0px] min-h-[377px]", className)}>
      <img
        src="https://ucarecdn.com/b51714e8-0828-4859-92d8-d7b4db4198c7/-/preview/500x500/-/quality/smart/-/format/auto/"
        className="absolute top-0 left-0 z-10 xl:w-auto xl:h-auto w-[144px] h-[145px]"
      />
      <img
        src="https://ucarecdn.com/0911ce36-1c53-4bc5-8594-a89a35334c6d/-/preview/500x500/-/quality/smart/-/format/auto/"
        className="absolute top-14 xl:left-4 left-0 z-[5] xl:w-[197px] xl:h-[229px] w-[144px] h-[116px]"
      />
      <img
        src="https://ucarecdn.com/d533622e-04d7-4935-bff0-5d825151bc63/-/preview/500x500/-/quality/smart/-/format/auto/"
        className="absolute xl:bottom-10 bottom-4 left-0 z-10 xl:w-auto xl:h-auto w-[158px] h-[184px]"
      />
      <img
        src="https://ucarecdn.com/5a2f23a6-26ab-45f7-be17-587eef728252/-/preview/500x500/-/quality/smart/-/format/auto/"
        className="absolute xl:bottom-0 -bottom-4 xl:left-4 left-0 z-[5] xl:w-[197px] xl:h-[229px] w-[158px] h-[175px]"
      />
      <img
        src="https://ucarecdn.com/ac01edbc-77fe-4bb3-9fa5-25f793317d26/-/preview/500x500/-/quality/smart/-/format/auto/"
        className="absolute xl:bottom-10 bottom-4 sm:right-0 -right-[160px] z-30 xl:w-auto xl:h-auto w-[343px] h-[259px]"
      />
      <div className="bg-[#3ABF9C] xl:w-[499px] xl:h-[422px] w-[291px] h-[100px] rounded-[20px] xl:-right-[128px] sm:-right-10 -right-[160px] xl:bottom-[106px] top-16 absolute" />
      <img
        src="https://ucarecdn.com/66289d3c-524e-405a-9c05-78e202431b5e/-/preview/500x500/-/quality/smart/-/format/auto/"
        className="absolute sm:-bottom-10 -bottom-6 xl:-right-[100px] sm:right-0 -right-[90px] z-[5] xl:w-[555px] xl:h-[423px] w-[323px] h-[246px]"
      />
    </div>
  );
}