"use client";
import ImageOptimize from "@/components/image";
import { ImagesYenSao } from "@/layout/home-layout/production-process";

export default function AboutPage() {
  return (
    <>
      <section className="lg:-mt-[78px] -mt-[90px] relative">
        <div
          className="lg:h-[1084px] lg:pt-0 pt-[100%] relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://ucarecdn.com/b3788d6b-1576-43a5-a3ac-d77a1879489e/-/format/webp/-/progressive/yes/")',
          }}
        >
          <div
            className="absolute top-1 left-0 w-full lg:h-full h-[calc(100%-80px)] z-[20]"
            style={{
              background: "linear-gradient(180deg, rgba(32, 80, 80, 0.00) 73.44%, #204F4F 100%)",
            }}
          />
          <figure className="lg:w-[180px] lg:h-[428px] w-[30px] h-[72px] absolute lg:top-[90px] top-[80px] mx-auto left-0 right-0">
            <ImageOptimize
              src="https://ucarecdn.com/4469cadf-ecd2-4173-8465-956e2f9de08d/-/format/webp/-/progressive/yes/"
              alt="main yen sao vui"
            />
          </figure>
        </div>
      </section>
      <section
        className="lg:bg-cover bg-contain bg-primary-1-7 text-white xl:pt-[60px] lg:pt-[100px] -mt-[80px] overflow-hidden relative [&_p]:text-justify"
        style={{
          backgroundImage: `url('https://ucarecdn.com/2116657f-8b57-40b2-a3fb-4f2b500228be/-/format/webp/-/progressive/yes/')`,
        }}
      >
        <div className="flex lg:flex-row flex-col xl:gap-[100px] gap-[30px] lg:mb-[200px] mb-[30px] lg:pl-[77px] pl-0 relative">
          <div className="lg:flex-1 xl:max-w-[625px] lg:max-w-[457px] lg:px-0 px-6">
            <h1 className="xl:!text-[236px] lg:!text-[128px] !text-[100px] !leading-normal !font-normal align-middle font-street-sign-sans text-primary-2-5 whitespace-nowrap lg:text-start text-center">
              Giới thiệu
            </h1>
            <p className="lg:text-body-lg-regular text-body-md-regular">
              Thương hiệu {`"Yến Sào Nhà Vui"`} đã ghi dấu ấn mạnh mẽ trong lĩnh vực Yến sào trong suốt
              10 năm qua. Chúng tôi tự hào cung cấp các sản phẩm Yến sào tự nhiên, không qua bất kỳ quá
              trình chế biến hay xử lý hóa học nào, để đảm bảo giữ nguyên toàn bộ giá trị dinh dưỡng và
              hương vị đặc biệt của loại thực phẩm này. Dưới đây là một số điểm nổi bật về thương hiệu
              {`"Yến Sào Nhà Vui"`} trong lĩnh vực Yến sào:
            </p>
            <br />
            <p className="lg:text-body-lg-regular text-body-md-regular">
              Sản phẩm tự nhiên và thuần khiết: Chúng tôi cam kết cung cấp Yến sào tự nhiên, không chứa
              hóa chất hoặc tác nhân bảo quản. Điều này đảm bảo sự thuần khiết và nguyên vẹn của sản
              phẩm, giúp bảo tồn toàn bộ giá trị dinh dưỡng và chất lượng của sản phẩm.
            </p>
            <br />
            <p className="lg:text-body-lg-regular text-body-md-regular">
              Nguồn gốc và bảo vệ môi trường: Chúng tôi lựa chọn nguồn cung ứng Yến sào từ những vùng có
              môi trường sạch sẽ và bảo vệ môi trường. Điều này thể hiện cam kết của chúng tôi đối với
              bảo vệ sự cân bằng tự nhiên và nguồn tài nguyên thiên nhiên.
            </p>
          </div>
          <ImagesYenSao className="xl:mt-[200px] lg:mt-[300px]" />
        </div>

        <div className="flex lg:flex-row flex-col-reverse items-start lg:gap-[116px] gap-[60px] lg:pr-20 lg:mb-[152px] mb-[59px]">
          <figure className="lg:max-w-[585px] w-full lg:max-h-[1022px] lg:min-h-[1022px] max-h-[729px] min-h-[729px] relative lg:rounded-[20px] rounded-[14px] flex-1">
            <div className="absolute lg:-top-[88px] -top-[34px] left-0 lg:w-[430px] lg:h-[200px] w-[294px] h-[274px] bg-[#3ABF9C] rounded-r-[20px] z-0" />
            <div className="absolute top-[50px] -right-[44px] w-[461px] h-[301px] bg-[#3ABF9C] rounded-r-[20px] z-0 lg:block hidden" />
            <img
              className="absolute top-0 left-0 w-full h-full rounded-[20px] z-10"
              src="https://ucarecdn.com/198a4ea0-6165-4c7a-8b19-3841b1040960/-/format/webp/-/progressive/yes/"
              alt="Yến chung đường phèn"
            />
          </figure>
          <div className="flex-1 lg:px-0 px-6">
            <p className="lg:text-body-lg-regular text-body-md-regular">
              Đa dạng sản phẩm: {`"Yến Sào Nhà Vui"`} cung cấp nhiều loại sản phẩm Yến sào thô, bao gồm
              các loại Yến sào nguyên chất, Yến sào khô, Yến sào bã trứng, và nhiều sản phẩm khác, để
              phục vụ đa dạng nhu cầu của khách hàng.
            </p>
            <br />
            <p className="lg:text-body-lg-regular text-body-md-regular">
              Chất lượng đỉnh cao: Với phương pháp thẩm thấu ngược, và làm sạch hoàn toàn bằng thủ công,
              Nàng Yến cam đoan giữ được độ dai dòn của sợi yến, và tính nguyên chất của tổ yến. Chúng
              tôi tuân thủ các tiêu chuẩn nghiêm ngặt về chất lượng và an toàn thực phẩm, đảm bảo rằng
              sản phẩm của chúng tôi luôn đạt chất lượng đỉnh cao.
            </p>
            <br />
            <p className="lg:text-body-lg-regular text-body-md-regular">
              Tư vấn và hỗ trợ khách hàng: Đội ngũ chăm sóc khách hàng của chúng tôi luôn sẵn sàng hỗ trợ
              và tư vấn cho khách hàng về cách lựa chọn và sử dụng sản phẩm Yến sào thô.
            </p>
            <p className="lg:text-body-lg-regular text-body-md-regular">
              Chúng tôi hiểu rằng Yến sào thô là một nguồn thực phẩm quý báu với nhiều giá trị dinh dưỡng
              và sức khỏe. {`"Yến Sào Nhà Vui"`} cam kết đem đến cho khách hàng sự tin tưởng và hài lòng
              bằng việc cung cấp các sản phẩm Yến sào thô chất lượng và an toàn, giữ nguyên nguồn gốc tự
              nhiên của sản phẩm.
            </p>
          </div>
        </div>

        <div className="lg:px-20 px-[68px] flex lg:flex-row flex-col lg:gap-[60px] gap-[30px] mb-[90px]">
          <div className="lg:mb-0 mb-[30px]">
            <h5 className="mb-2 lg:text-start text-center">LÝ DO CHỌN</h5>
            <figure className="pt-[88px] pl-[245px] relative">
              <img
                src="https://ucarecdn.com/6e0e54cf-9ce1-4cab-b5b2-89c13b7f18ad/-/format/webp/-/progressive/yes/"
                className="absolute top-0 left-0 w-full h-full"
              />
            </figure>
          </div>
          {REASON?.map((reason) => (
            <div key={reason?.title}>
              <h5 className="mb-2 text-secondary-3 lg:text-start text-center">{reason?.title}</h5>
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
