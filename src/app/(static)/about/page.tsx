"use client";
import { streetSignSans } from "@/assets";
import ImageOptimize from "@/components/image";
import Image from "next/image";
import classes from "@/components/home-component/produce-process/produce-process.module.css";
import { cn } from "@/utils";

export default function AboutPage() {
  return (
    <>
      <section className="-mt-[78px] relative">
        <div className="h-[1084px] relative bg-home-section-1">
          <div
            className="absolute top-1 left-0 w-full h-full"
            style={{
              background: "linear-gradient(180deg, rgba(32, 80, 80, 0.00) 73.44%, #204F4F 100%)",
            }}
          />
          <figure className="w-[180px] h-[428px] absolute top-[90px] mx-auto left-0 right-0">
            <ImageOptimize
              src="https://ucarecdn.com/4469cadf-ecd2-4173-8465-956e2f9de08d/-/preview/500x500/-/quality/smart/-/format/auto/"
              alt="main yen sao vui"
            />
          </figure>
        </div>
      </section>
      <section
        className="bg-cover bg-primary-1-7 bg-no-repeat text-white pt-[60px] overflow-hidden relative [&_p]:text-justify"
        style={{
          backgroundImage: `url('https://ucarecdn.com/2116657f-8b57-40b2-a3fb-4f2b500228be/-/preview/-/quality/smart/-/format/auto/')`,
        }}
      >
        <div className="flex gap-[100px] mb-[200px] pl-[77px] relative">
          <div className="flex-1 max-w-[625px]">
            <h1 className="!text-[236px] !leading-normal !font-normal align-middle font-street-sign-sans text-primary-2-5 whitespace-nowrap">
              Giới thiệu
            </h1>
            <p className="text-body-lg-regular">
              Thương hiệu {`"Yến Sào Nhà Vui"`} đã ghi dấu ấn mạnh mẽ trong lĩnh vực Yến sào trong suốt
              10 năm qua. Chúng tôi tự hào cung cấp các sản phẩm Yến sào tự nhiên, không qua bất kỳ quá
              trình chế biến hay xử lý hóa học nào, để đảm bảo giữ nguyên toàn bộ giá trị dinh dưỡng và
              hương vị đặc biệt của loại thực phẩm này. Dưới đây là một số điểm nổi bật về thương hiệu
              {`"Yến Sào Nhà Vui"`} trong lĩnh vực Yến sào:
            </p>
            <br />
            <p className="text-body-lg-regular">
              Sản phẩm tự nhiên và thuần khiết: Chúng tôi cam kết cung cấp Yến sào tự nhiên, không chứa
              hóa chất hoặc tác nhân bảo quản. Điều này đảm bảo sự thuần khiết và nguyên vẹn của sản
              phẩm, giúp bảo tồn toàn bộ giá trị dinh dưỡng và chất lượng của sản phẩm.
            </p>
            <br />
            <p className="text-body-lg-regular">
              Nguồn gốc và bảo vệ môi trường: Chúng tôi lựa chọn nguồn cung ứng Yến sào từ những vùng có
              môi trường sạch sẽ và bảo vệ môi trường. Điều này thể hiện cam kết của chúng tôi đối với
              bảo vệ sự cân bằng tự nhiên và nguồn tài nguyên thiên nhiên.
            </p>
          </div>
          <div className="relative md:absolute top-50 w-full md:w-1/2 md:h-1/2 ms-0 md:ms-12 right-0 grid grid-cols-3 mt-[200px]">
            <div className="grid grid-rows-2">
              <div className={classes.imageContainer1}></div>
              <div className={classes.imageContainer2}></div>
            </div>
            <div className="relative col-span-2 h-full flex items-center">
              <div className={cn(classes.image3, "absolute top-0 w-full h-full -right-[68px]")}>
                <div className={classes.imageContainer3}></div>
                <div className={classes.shape}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-[116px] pr-20 mb-[152px]">
          <figure className="max-w-[585px] max-h-[1022px] min-h-[1022px] relative rounded-[20px] flex-1">
            <div className="absolute -top-[88px] left-0 w-[430px] h-[200px] bg-[#3ABF9C] rounded-r-[20px] z-0" />
            <div className="absolute top-[50px] -right-[44px] w-[461px] h-[301px] bg-[#3ABF9C] rounded-r-[20px] z-0" />
            <img
              className="absolute top-0 left-0 w-full h-full rounded-[20px] z-10"
              src="https://ucarecdn.com/198a4ea0-6165-4c7a-8b19-3841b1040960/-/preview/-/quality/smart/-/format/auto/"
              alt="Yến chung đường phèn"
            />
          </figure>
          <div className="flex-1">
            <p className="text-body-lg-regular">
              Đa dạng sản phẩm: {`"Yến Sào Nhà Vui"`} cung cấp nhiều loại sản phẩm Yến sào thô, bao gồm
              các loại Yến sào nguyên chất, Yến sào khô, Yến sào bã trứng, và nhiều sản phẩm khác, để
              phục vụ đa dạng nhu cầu của khách hàng.
            </p>
            <br />
            <p className="text-body-lg-regular">
              Chất lượng đỉnh cao: Với phương pháp thẩm thấu ngược, và làm sạch hoàn toàn bằng thủ công,
              Nàng Yến cam đoan giữ được độ dai dòn của sợi yến, và tính nguyên chất của tổ yến. Chúng
              tôi tuân thủ các tiêu chuẩn nghiêm ngặt về chất lượng và an toàn thực phẩm, đảm bảo rằng
              sản phẩm của chúng tôi luôn đạt chất lượng đỉnh cao.
            </p>
            <br />
            <p className="text-body-lg-regular">
              Tư vấn và hỗ trợ khách hàng: Đội ngũ chăm sóc khách hàng của chúng tôi luôn sẵn sàng hỗ trợ
              và tư vấn cho khách hàng về cách lựa chọn và sử dụng sản phẩm Yến sào thô.
            </p>
            <p className="text-body-lg-regular">
              Chúng tôi hiểu rằng Yến sào thô là một nguồn thực phẩm quý báu với nhiều giá trị dinh dưỡng
              và sức khỏe. {`"Yến Sào Nhà Vui"`} cam kết đem đến cho khách hàng sự tin tưởng và hài lòng
              bằng việc cung cấp các sản phẩm Yến sào thô chất lượng và an toàn, giữ nguyên nguồn gốc tự
              nhiên của sản phẩm.
            </p>
          </div>
        </div>

        <div className="px-20 flex gap-[60px] mb-[90px]">
          <div>
            <h5 className="mb-2">LÝ DO CHỌN</h5>
            <figure className="pt-[88px] pl-[245px] relative">
              <img
                src="https://ucarecdn.com/6e0e54cf-9ce1-4cab-b5b2-89c13b7f18ad/-/preview/-/quality/smart/-/format/auto/"
                className="absolute top-0 left-0 w-full h-full"
              />
            </figure>
          </div>
          {REASON?.map((reason) => (
            <div key={reason?.title}>
              <h5 className="mb-2 text-secondary-3">{reason?.title}</h5>
              <p className="text-body-md-regular">{reason?.content}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

const REASON = [
  {
    title: "CHẤT LƯỢNG",
    content:
      "Quy trình khai thác nghiêm ngặt, chỉ những tổ yến hình thành, được nuôi dưỡng trên 6 tháng mới được thu hoạch về Nhà Vui.",
  },
  {
    title: "CAO CẤP",
    content:
      "Yến nhà vui tự tin với gu thẩm mỹ tinh tế cùng một sản phẩm được nâng niu bởi những ng thợ lành nghề sẽ truyền tải được thông điệp của sự trân trọng, tình thân.",
  },
  {
    title: "UY TÍN",
    content:
      "Hơn 10 năm hoạt động trong nghề, chữ TÂM và TÍN luôn đồng hành cùng Yến Nhà Vui để mang đến những sản phẩm tốt nhất, sang trọng nhất với chất lượng thượng hạng.",
  },
];
