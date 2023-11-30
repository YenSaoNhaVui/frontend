import { FBIcon, InstagramIcon } from "@/components/icons";
import Icon from "@/components/ui/icon";
import Link from "antd/es/typography/Link";

export default function Footer() {
  return (
    <footer className="bg-[#D8AA34] w-full py-5">
      <div className="max-w-[1080px] mx-auto w-full">
        <div className="flex lg:my-12 my-[30px] lg:mx-0 mx-6 items-center justify-between lg:flex-row flex-col lg:gap-y-0 gap-y-12">
          <div className="flex items-center gap-[30px]">
            <img
              src="https://ucarecdn.com/cba0f7da-0c7b-4649-9d07-8a753f180f80/-/preview/-/quality/smart/-/format/auto/"
              alt="Logo màu đen"
              className="w-[68px] h-[163px]"
            />
            <div>
              <img
                src="https://ucarecdn.com/d3107bc0-6c5a-4e1b-9d2d-2a2331b36e6c/-/preview/-/quality/smart/-/format/auto/"
                alt="Yến nhà vui"
                className="w-[98px] h-9"
              />
              <p className="text-body-lg-normal max-w-[303px] mt-[18px]">
                Thương hiệu "Yến Sào Nhà Vui" đã ghi dấu ấn mạnh mẽ trong lĩnh vực Yến sào trong suốt 10
                năm qua. Chúng tôi tự hào cung cấp các sản phẩm Yến sào tự nhiên được đảm bảo giữ nguyên
                toàn bộ giá trị dinh dưỡng và hương vị đặc biệt của loại thực phẩm này.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-[90px] flex-wrap">
            <div className="flex flex-col gap-4 text-body-lg-normal">
              <p>Giới thiệu</p>
              <p>Sản phẩm</p>
              <p>Dịch vụ</p>
              <p>Liên hệ</p>
            </div>
            <div className="flex flex-col gap-4 text-body-lg-normal">
              <p>Theo dõi chúng tôi</p>
              <div className="flex items-center gap-2 lg:justify-start justify-end">
                <Icon className="!w-6 !h-[33px]">
                  <FBIcon />
                </Icon>
                <p>Facebook</p>
              </div>
              <div className="flex items-center gap-2 lg:justify-start justify-end">
                <div className="h-[33px]">
                  <Icon size="lg">
                    <InstagramIcon />
                  </Icon>
                </div>
                <p className="ml-1">Instagram</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center lg:justify-between justify-center mt-[56px] text-body-lg-normal flex-wrap lg:pt-0 lg:mx-0 mx-6 pt-6 lg:border-t-0 border-t border-solid border-black">
          <p>Copyright © 2023</p>
          <div className="flex items-center">
            <Link href="/parnership-and-collabration/terms-conditions" className="!text-black">
              <p className="lg:mr-8">Terms & Conditions</p>
            </Link>
            <p className="mx-1 lg:hidden block">|</p>
            <Link href="/parnership-and-collabration/privacy-policy" className="!text-black">
              <p>Privacy Policy</p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
