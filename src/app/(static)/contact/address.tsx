import { LocationIcon, MailIcon, PhoneIcon } from "@/components/icons";
import Icon from "@/components/ui/icon";
import SkeletonButton from "antd/es/skeleton/Button";

export default function Address() {
  return (
    <div className="flex lg:flex-row flex-col-reverse lg:gap-9 gap-[30px] lg:mb-12 mb-7">
      <div className="overflow-hidden rounded-2xl lg:max-w-[510px] lg:h-[510px] lg:pt-0 pt-[100%] flex-1 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d346.36665532245246!2d106.6157667076169!3d10.83491383033049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bcd0a8eab7b%3A0x66b92925c3ba7f96!2zMDYgxJAuIFTDom4gVGjhu5tpIE5o4bqldCAxLCBUw6JuIFRo4bubaSBOaOG6pXQsIFF14bqtbiAxMiwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1699028785430!5m2!1svi!2s"
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
        <h1 className="lg:!text-[128px] !text-[85px] leading-normal font-street-sign-sans !font-normal text-[#FAD743] mt-[64px]">
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
            <h5 className="lg:text-sm !text-body-md-semibold">0705195195 (Sđt & Zalo)</h5>
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
