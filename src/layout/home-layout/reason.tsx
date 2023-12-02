import { ArrowRightStraightIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Reason() {
  return (
    <div className="flex lg:flex-row flex-col lg:max-w-[1280px] lg:mx-auto mx-[68px] lg:gap-[61px] gap-[30px]">
      <div>
        <h5 className="mb-2 lg:text-start !text-center">LÝ DO CHỌN</h5>
        <div className="lg:blocl flex justify-center">
          <img
            src="https://ucarecdn.com/37425636-89a6-4570-8303-1f2c1387d5de/-/preview/500x500/-/quality/smart/-/format/auto/"
            className="mb-2"
          />
        </div>
        <div className="flex items-center justify-end mt-[18px]">
          <Button variant="ghost" className="!text-[#EED670] !underline hover:bg-transparent !p-0">
            Xem thêm
            <Icon size="lg" className="ml-1">
              <ArrowRightStraightIcon />
            </Icon>
          </Button>
        </div>
      </div>
      <div>
        <h5 className="mb-[14px] lg:text-start !text-center">CHẤT LƯỢNG</h5>
        <p className="text-body-md-normal opacity-80 lg:text-start !text-center">
          Quy trình khai thác nghiêm ngặt, chỉ những tổ yến hình thành, được nuôi dưỡng trên 6 tháng mới
          được thu hoạch về Nhà Vui.
        </p>
      </div>
      <div>
        <h5 className="mb-[14px] lg:text-start !text-center">CHẤT LƯỢNG</h5>
        <p className="text-body-md-normal opacity-80 lg:text-start !text-center">
          Yến nhà vui tự tin với gu thẩm mỹ tinh tế cùng một sản phẩm được nâng niu bởi những ng thợ lành
          nghề sẽ truyền tải được thông điệp của sự trân trọng, tình thân.
        </p>
      </div>
      <div>
        <h5 className="mb-[14px] lg:text-start !text-center">CHẤT LƯỢNG</h5>
        <p className="text-body-md-normal opacity-80 lg:text-start !text-center">
          Hơn 10 năm hoạt động trong nghề, chữ TÂM và TÍN luôn đồng hành cùng Yến Nhà Vui để mang đến
          những sản phẩm tốt nhất, sang trọng nhất với chất lượng thượng hạng.
        </p>
      </div>
    </div>
  );
}