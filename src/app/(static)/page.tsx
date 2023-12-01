"use client";

import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { ArrowLeftIcon, ArrowRightIcon, ArrowRightStraightIcon } from "@/components/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "@/components/product-card";
import { useRef } from "react";

export default function HomePage() {
  const slider = useRef(null);
  const sliderFeedback = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const settingsFeedback = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className="lg:-mt-[78px] -mt-[90px] relative">
        <div
          className="lg:h-[1084px] lg:pt-0 pt-[100%] relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://ucarecdn.com/b3788d6b-1576-43a5-a3ac-d77a1879489e/-/preview/-/quality/smart_retina/-/format/auto/")',
          }}
        >
          <div
            className="absolute top-1 left-0 w-full lg:h-full h-[calc(100%-80px)] z-[20]"
            style={{
              background: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 73.44%, #000 100%)",
            }}
          />
        </div>
      </section>
      <section
        className="lg:bg-cover bg-contain bg-black bg-no-repeat text-white lg:pt-[60px] -mt-[80px] overflow-hidden relative [&_p]:text-justify"
        style={{
          backgroundImage: `url('https://ucarecdn.com/5e16ca16-31a2-4300-86e3-23faad4838a1/-/quality/smart/-/format/auto/')`,
        }}
      >
        <h1 className="mt-[98px] lg:mb-[126px] mb-[25px] font-street-sign-sans lg:!text-[128px] !text-[45px] !leading-normal text-center text-[#FAD743] !font-normal">
          SẢN PHẨM NỔI BẬT
        </h1>
        <div className="lg:mb-[90px] mb-[76px] lg:max-w-[1064px] max-w-[365px] sm:mx-auto mx-6 relative">
          <div className="absolute -left-24 lg:flex hidden items-center top-0 h-full ">
            <Button
              onClick={() => (slider as any).current.slickPrev()}
              variant="ghost"
              className="shadow-[0px_3px_4px_0px_rgba(0,0,0,0.15)] !bg-white"
            >
              <Icon size="lg">
                <ArrowLeftIcon />
              </Icon>
            </Button>
          </div>
          <Slider
            ref={slider}
            {...settings}
            className="[&_.slick-slide]:lg:px-5 [&_.slick-slide]:px-[14px] [&_button]:!hidden"
          >
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Slider>
          <div className="absolute -right-14 lg:flex hidden items-center top-0 h-full">
            <Button
              onClick={() => (slider as any).current.slickNext()}
              variant="ghost"
              className="shadow-[0px_3px_4px_0px_rgba(0,0,0,0.15)] !bg-white"
            >
              <Icon size="lg">
                <ArrowRightIcon />
              </Icon>
            </Button>
          </div>
        </div>
        <div className="flex justify-center lg:mb-[107px] mb-7">
          <Button
            variant="ghost"
            className="items-center border border-solid border-[#FAD743] hover:!bg-transparent !text-[#FAD743]"
          >
            Xem thêm
            <Icon className="!w-[25px] !h-[25px] ml-1">
              <ArrowRightStraightIcon />
            </Icon>
          </Button>
        </div>
      </section>
      <section
        className="lg:bg-cover bg-contain bg-primary-1-7 bg-no-repeat text-white lg:pt-[190px] pt-[50px] overflow-hidden relative [&_p]:text-justify"
        style={{
          backgroundImage: `url('https://ucarecdn.com/2116657f-8b57-40b2-a3fb-4f2b500228be/-/preview/-/quality/smart/-/format/auto/')`,
        }}
      >
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
              Quy trình khai thác nghiêm ngặt, chỉ những tổ yến hình thành, được nuôi dưỡng trên 6 tháng
              mới được thu hoạch về Nhà Vui.
            </p>
          </div>
          <div>
            <h5 className="mb-[14px] lg:text-start !text-center">CHẤT LƯỢNG</h5>
            <p className="text-body-md-normal opacity-80 lg:text-start !text-center">
              Yến nhà vui tự tin với gu thẩm mỹ tinh tế cùng một sản phẩm được nâng niu bởi những ng thợ
              lành nghề sẽ truyền tải được thông điệp của sự trân trọng, tình thân.
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
        <div className="lg:mt-[400px] mt-[116px] flex lg:flex-row flex-col gap-[120px] mr-[80px]">
          <div className="relative">
            <div className="w-[495px] h-[422px] rounded-[20px] bg-[#3ABF9C] absolute z-10 -top-[66px] -left-[159px]" />
            <div className="w-[461px] h-[301px] rounded-[20px] bg-[#3ABF9C] absolute z-10 -right-[40px]" />
            <img
              src="https://ucarecdn.com/645914bd-09e6-4aa2-af41-570895cbc3b2/-/preview/500x500/-/quality/smart/-/format/auto/"
              className="relative z-30"
            />
            <img
              src="https://ucarecdn.com/4469cadf-ecd2-4173-8465-956e2f9de08d/-/preview/500x500/-/quality/smart/-/format/auto/"
              className="absolute z-30 top-0 left-0 bottom-0 right-0 mx-auto my-auto w-[127px] h-[302px]"
            />
            <img
              src="https://ucarecdn.com/8f062bb3-e77c-48c1-89f2-4d60f7d129df/-/preview/500x500/-/quality/smart/-/format/auto/"
              className="absolute z-[10] left-0 -bottom-8"
            />
          </div>
          <div className="flex-1">
            <h5 className="mt-[107px] mb-4">GIỚI THIỆU</h5>
            <img
              src="https://ucarecdn.com/37425636-89a6-4570-8303-1f2c1387d5de/-/preview/500x500/-/quality/smart/-/format/auto/"
              className="mb-4"
            />
            <p className="text-body-md-medium text-[#9EFEE0] mb-4">
              Thương hiệu {`"Yến Sào Nhà Vui"`} đã ghi dấu ấn mạnh mẽ trong lĩnh vực Yến sào trong suốt
              10 năm qua. Chúng tôi tự hào cung cấp các sản phẩm Yến sào tự nhiên, không qua bất kỳ quá
              trình chế biến hay xử lý hóa học nào, để đảm bảo giữ nguyên toàn bộ giá trị dinh dưỡng và
              hương vị đặc biệt của loại thực phẩm này.
            </p>
            <Button variant="ghost" className="!text-[#EED670] !underline hover:bg-transparent !p-0">
              Xem thêm
              <Icon size="lg" className="ml-1">
                <ArrowRightStraightIcon />
              </Icon>
            </Button>
          </div>
        </div>
        <div className="mt-[214px] flex gap-[30px] ml-[80px]">
          <div className="flex-1">
            <h5 className="mt-[151px] mb-4">QUY TRÌNH SẢN XUẤT</h5>
            <h3 className="mb-4 text-[#FAD743]">NGHIÊM NGẶT, ĐẢM BẢO AN TOÀN VỆ SINH THỰC PHẨM</h3>
            <p className="text-body-md-medium text-[#9EFEE0] mb-4">
              Thương hiệu {`"Yến Sào Nhà Vui"`} đã ghi dấu ấn mạnh mẽ trong lĩnh vực Yến sào trong suốt
              10 năm qua. Chúng tôi tự hào cung cấp các sản phẩm Yến sào tự nhiên, không qua bất kỳ quá
              trình chế biến hay xử lý hóa học nào, để đảm bảo giữ nguyên toàn bộ giá trị dinh dưỡng và
              hương vị đặc biệt của loại thực phẩm này.
            </p>
            <Button variant="ghost" className="!text-[#EED670] !underline hover:bg-transparent !p-0">
              Xem thêm
              <Icon size="lg" className="ml-1">
                <ArrowRightStraightIcon />
              </Icon>
            </Button>
          </div>
          <div className="relative flex-1 h-[684px]">
            <img
              src="https://ucarecdn.com/b51714e8-0828-4859-92d8-d7b4db4198c7/-/preview/500x500/-/quality/smart/-/format/auto/"
              className="absolute top-0 left-0 z-10"
            />
            <img
              src="https://ucarecdn.com/0911ce36-1c53-4bc5-8594-a89a35334c6d/-/preview/500x500/-/quality/smart/-/format/auto/"
              className="absolute top-14 left-4 z-[5] w-[197px] h-[229px]"
            />
            <img
              src="https://ucarecdn.com/d533622e-04d7-4935-bff0-5d825151bc63/-/preview/500x500/-/quality/smart/-/format/auto/"
              className="absolute bottom-10 left-0 z-10"
            />
            <img
              src="https://ucarecdn.com/5a2f23a6-26ab-45f7-be17-587eef728252/-/preview/500x500/-/quality/smart/-/format/auto/"
              className="absolute bottom-0 left-4 z-[5] w-[197px] h-[229px]"
            />
            <img
              src="https://ucarecdn.com/ac01edbc-77fe-4bb3-9fa5-25f793317d26/-/preview/500x500/-/quality/smart/-/format/auto/"
              className="absolute bottom-10 right-0 z-30"
            />
            <div className="bg-[#3ABF9C] w-[499px] h-[422px] rounded-[20px] -right-[128px] bottom-[106px] absolute" />
            <img
              src="https://ucarecdn.com/66289d3c-524e-405a-9c05-78e202431b5e/-/preview/500x500/-/quality/smart/-/format/auto/"
              className="absolute -bottom-10 -right-[100px] z-[5] w-[555px] h-[423px]"
            />
          </div>
        </div>
        <div className="mt-[175px]">
          <h5 className="text-center mb-4">TRẢI NGHIỆM SẢN PHẨM</h5>
          <h3 className="text-center text-[#FAD743] mb-[53px]">TRẢI NGHIỆM SẢN PHẨM</h3>
          <div className="max-w-[1136px] mx-auto mb-[80px] relative">
            <div className="absolute -left-[100px] flex items-center top-0 h-full">
              <Button
                onClick={() => (sliderFeedback as any).current.slickPrev()}
                variant="ghost"
                className="shadow-[0px_3px_4px_0px_rgba(0,0,0,0.15)] !bg-white"
              >
                <Icon size="lg">
                  <ArrowLeftIcon />
                </Icon>
              </Button>
            </div>
            <Slider
              ref={sliderFeedback}
              {...settingsFeedback}
              className="[&_.slick-slide]:pr-[13px] [&_button]:!hidden"
            >
              <CardFeedBack />
              <CardFeedBack />
              <CardFeedBack />
              <CardFeedBack />
            </Slider>
            <div className="absolute -right-[92px] flex items-center top-0 h-full">
              <Button
                onClick={() => (sliderFeedback as any).current.slickNext()}
                variant="ghost"
                className="shadow-[0px_3px_4px_0px_rgba(0,0,0,0.15)] !bg-white"
              >
                <Icon size="lg">
                  <ArrowRightIcon />
                </Icon>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function CardFeedBack() {
  return (
    <div className="w-[370px] h-[476px] relative">
      <img
        src="https://ucarecdn.com/48c3ed75-89ea-4578-9e26-6e3798aa90e2/-/preview/500x500/-/quality/smart/-/format/auto/"
        className="w-full h-full rounded-[18px] absolute top-0 left-0"
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-end p-4">
        <div className="bg-white w-full rounded-[18px]">
          <div className="flex w-full justify-center -mt-[25px] mb-[13px]">
            <div className="bg-white rounded-full flex items-center justify-center p-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9s5_XJL7tcJ-0WT-gI4fYIOV66rAZSKZr0A&usqp=CAU"
                className="w-[50px] h-[50px] rounded-full object-cover"
              />
            </div>
          </div>
          <p className="text-body-lg-semibold text-[#004C4D] !text-center">Nguyễn Thế Anh</p>
          <p className="text-body-xs-normal text-[#004C4D]/60 !text-center mb-[18px]">
            Quản lí nhà hàng
          </p>
          <p className="text-body-sm-normal text-[#1E1E1E]/80 max-w-[256px] !text-center mx-auto mb-4">
            Sản phẩm rất tốt, dùng một thời gian cảm thấy cải thiện sức khoẻ, da dẻ hồng hào. Hương vị
            thơm ngon, ăn mỗi ngày không lo ngấy!
          </p>
        </div>
      </div>
    </div>
  );
}
