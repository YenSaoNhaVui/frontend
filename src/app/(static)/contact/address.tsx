import { LocationIcon, MailIcon, PhoneIcon } from "@/components/icons";
import Icon from "@/components/ui/icon";
import SkeletonButton from "antd/es/skeleton/Button";

export default function Address() {
  return (
    <div className="flex lg:flex-row flex-col-reverse lg:gap-9 gap-[30px] lg:mb-12 mb-7">
      <div className="overflow-hidden rounded-2xl lg:max-w-[510px] lg:h-[510px] lg:pt-0 pt-[100%] flex-1 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15674.744372654304!2d106.6114358!3d10.8353171!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bba9699c001%3A0x2aeab725bd6a4773!2zWeG6v24gU8OgbyBOaMOgIFZ1aQ!5e0!3m2!1svi!2s!4v1732897544799!5m2!1svi!2s"
          width="100%"
          height="100%"
          className="lg:relative absolute top-0 left-0 w-full h-full z-10"
          frameBorder={0}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <SkeletonButton className="!w-full !h-full [&_span]:!rounded-none [&_span]:!bg-black/30 absolute top-0 left-0 z-0" />
      </div>
      <div className="flex lg:gap-5 gap-[15px] flex-col flex-1">
        <h1 className="lg:!text-[128px] !text-[85px] leading-normal font-street-sign-sans !font-normal text-[#FAD743] mt-[32px]">
          LIÊN HỆ
        </h1>
        <div className="py-2.5 flex flex-col gap-2.5">
          <h4 className="text-secondary-4 lg:text-sm !text-body-lg-semibold">
            CÔNG TY CỔ PHẦN XUẤT NHẬP KHẨU THƯƠNG MẠI DỊCH VỤ YẾN SÀO NHÀ VUI
          </h4>
          <h5 className="lg:text-sm !text-body-md-semibold">
            NHA VUI {"BIRD’S"} NEST JOINT STOCK COMPANY
          </h5>
        </div>
        <div className="py-0.5 gap-2 flex flex-col">
          <div className="flex lg:gap-2.5 gap-1.5">
            <Icon size="lg" className="mt-[3px]">
              <LocationIcon />
            </Icon>
            <h5 className="lg:text-sm !text-body-md-semibold">
              66/9/27 KP6A, Đường Tân Thới Nhất 06, Phường Tân Thới Nhất, Quận 12
            </h5>
          </div>
          <div className="flex lg:gap-2.5 gap-1.5">
            <Icon size="lg" className="mt-[3px]">
              <PhoneIcon />
            </Icon>
            <h5 className="lg:text-sm !text-body-md-semibold">0908337315 (Sđt & Zalo)</h5>
          </div>
          <div className="flex lg:gap-2.5 gap-1.5">
            <Icon size="lg" className="mt-[3px]">
              <MailIcon />
            </Icon>
            <h5 className="lg:text-sm !text-body-md-semibold">yensaonhavui@gmail.com</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
