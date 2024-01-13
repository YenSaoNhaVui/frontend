import { ArrowRightIcon } from "@/components/icons";
import ImageOptimize from "@/components/image";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { StaticData } from "@/interfaces";
import { ImagesYenSao } from "@/layout/home-layout/production-process";
import { YenNhaVui } from "@/layout/home-layout/reason";

export default async function AboutPage() {
  const data = await getData();

  return (
    <>
      <section className="lg:-mt-[78px] -mt-[90px] relative">
        <div className="lg:h-[1084px] lg:pt-0 pt-[100%] relative">
          <ImageOptimize
            src="https://ucarecdn.com/b3788d6b-1576-43a5-a3ac-d77a1879489e/-/preview/-/quality/lighter/-/format/webp/-/progressive/yes/"
            className="absolute top-0 left-0 w-full h-full object-cover"
            alt="Giới thiệu về yến sào nhà vui"
          />
          <div
            className="absolute top-1 left-0 w-full lg:h-full h-[calc(100%-80px)] z-[20]"
            style={{
              background: "linear-gradient(180deg, rgba(32, 80, 80, 0.00) 73.44%, #204F4F 100%)",
            }}
          />
          <figure className="lg:w-[180px] lg:h-[428px] w-[30px] h-[72px] absolute lg:top-[90px] top-[80px] mx-auto left-0 right-0">
            <ImageOptimize
              src="https://ucarecdn.com/4469cadf-ecd2-4173-8465-956e2f9de08d/-/quality/better/-/format/webp/-/progressive/yes/"
              alt="main yen sao vui"
              className="absolute top-0 left-0 w-full h-full"
            />
          </figure>
        </div>
      </section>
      <section
        className="lg:bg-cover bg-contain bg-primary-1-7 text-white xl:pt-[60px] lg:pt-[100px] -mt-[80px] overflow-hidden relative [&_p]:text-justify"
        style={{
          backgroundImage: `url('https://ucarecdn.com/2116657f-8b57-40b2-a3fb-4f2b500228be/-/quality/lighter/-/format/webp/-/progressive/yes/')`,
        }}
      >
        <div className="lg:flex xl:gap-[100px] gap-[30px] lg:mb-[200px] mb-[30px] lg:pl-[77px] pl-0 relative items-center">
          <div className="xl:max-w-[800px] lg:max-w-[457px] lg:px-0 px-6">
            <h1 className="xl:!text-[180px] lg:!text-[128px] !text-[100px] !leading-normal !font-normal align-middle font-street-sign-sans text-primary-2-5 whitespace-nowrap lg:text-start text-center">
              Giới thiệu
            </h1>
            <p className="lg:text-body-lg-regular text-body-md-regular">
              Thương hiệu {'"Yến Sào Nhà Vui"'} đã ghi dấu ấn mạnh mẽ trong lĩnh vực Yến sào trong suốt
              10 năm qua. Chúng tôi tự hào cung cấp các sản phẩm Yến sào tự nhiên, không qua bất kỳ quá
              trình chế biến hay xử lý hóa học nào, để đảm bảo giữ nguyên toàn bộ giá trị dinh dưỡng và
              hương vị đặc biệt của loại thực phẩm này. 
            </p>
            <br />
            <p className="lg:text-body-lg-regular text-body-md-regular">
              Nguồn gốc và bảo vệ môi trường: Chúng tôi lựa chọn nguồn cung ứng Yến sào từ những vùng có
              môi trường sạch sẽ và bảo vệ môi trường. Điều này thể hiện cam kết của chúng tôi đối với
              bảo vệ sự cân bằng tự nhiên và nguồn tài nguyên thiên nhiên.
            </p>
          </div>
          <ImagesYenSao data={data} className="lg:!w-[425px] lg:!h-[756px] mt-[30px]" />
        </div>

        <div className="flex lg:flex-row flex-col-reverse items-center xl:gap-[180px] lg:gap-[100px] gap-[60px] xl:pr-20 lg:pr-10">
          <figure className="lg:max-w-[585px] lg:min-w-[500px] w-full lg:max-h-[800px] lg:min-h-[800px] sm:min-h-[800px] sm:max-h-[800px] min-h-[500px] max-h-[500px] relative lg:rounded-[20px] rounded-[14px] flex-1">
            <div className="absolute lg:-top-[88px] -top-[34px] left-0 lg:w-[430px] lg:h-[200px] w-[294px] h-[274px] bg-[#3ABF9C] rounded-r-[20px] z-0 lg:block hidden" />
            <div className="absolute top-[50px] -right-[44px] w-[461px] h-[301px] bg-[#3ABF9C] rounded-r-[20px] z-0 lg:block hidden" />
            <ImageOptimize
              className="absolute top-0 left-0 w-full h-full rounded-[20px] z-10 lg:object-cover object-contain"
              src="https://ucarecdn.com/6637b0b3-fea6-4f7d-9ee7-d0c2fce606dc/-/quality/better/-/format/webp/-/progressive/yes/"
              alt="Giấy chứng nhận"
            />
          </figure>
          <div className="flex-1 lg:px-0 px-6">
            <h1 className="text-[60px] lg:!leading-[60px] !leading-normal !font-normal align-middle font-street-sign-sans text-primary-2-5 whitespace-nowrap lg:text-start text-center lg:mb-3">
              GIẤY CHỨNG NHẬN
            </h1>
            <p className="lg:text-body-lg-regular text-body-md-regular">
              Yến Nhà Vui là một thương hiệu uy tín, chuyên cung cấp các sản phẩm yến sào chất lượng cao,
              an toàn và bổ dưỡng.
            </p>
            <br />
            <p className="lg:text-body-lg-regular text-body-md-regular">
              Để khẳng định uy tín và chất lượng của mình, Yến Nhà Vui đã đạt được giấy chứng nhận ISO
              22000:2018, một tiêu chuẩn quốc tế về hệ thống quản lý an toàn thực phẩm. Giấy chứng nhận
              này được cấp bởi VINACOMIN QUALITY CERTIFICATION JOINT STOCK COMPANY, một tổ chức chứng
              nhận uy tín và có thẩm quyền
            </p>
            <br />
            <p className="lg:text-body-lg-regular text-body-md-regular">
              Nhờ có giấy chứng nhận này, Yến Nhà Vui đã chứng minh được rằng công ty tuân thủ các yêu
              cầu nghiêm ngặt về chất lượng, an toàn và quy trình sản xuất của yến sào. Đây là một lợi
              thế cạnh tranh của Yến Nhà Vui trên thị trường, cũng như là một lời cam kết với khách hàng
              về sự tận tâm và chuyên nghiệp của công ty.
            </p>
          </div>
        </div>
        <div className="mt-[50px] flex lg:flex-row flex-col lg:gap-[106px] gap-6 items-center xl:max-w-[1276px] lg:max-w-[1024] lg:mx-auto mx-6 lg:text-start text-center">
          <div className="flex-1">
            <h1 className="text-[60px] lg:!leading-[60px] !leading-normal !font-normal align-middle font-street-sign-sans text-primary-2-5 whitespace-nowrap lg:text-start text-center lg:mb-7">
              TỔ YẾN CAO CẤP
            </h1>
            <p className="text-body-md-regular !mb-7">
              Sản phẩm tự nhiên và thuần khiết: Chúng tôi cam kết cung cấp Yến sào tự nhiên, không chứa
              hóa chất hoặc tác nhân bảo quản. Điều này đảm bảo sự thuần khiết và nguyên vẹn của sản
              phẩm, giúp bảo tồn toàn bộ giá trị dinh dưỡng và chất lượng của sản phẩm.
            </p>
            <Button
              variant="outlined"
              className="!p-0 !w-[179px] !h-12 !gap-1 items-center border-[#FAD743] !text-[#FAD743]  hover:!bg-transparent [&_path]:!stroke-[#FAD743]"
            >
              <p>Xem thêm</p>
              <Icon>
                <ArrowRightIcon />
              </Icon>
            </Button>
          </div>
          <figure className="lg:!min-w-[660px] min-w-[100vw] sm:!min-h-[440px] !min-h-[292px] lg:rounded-[18px] rounded-none relative overflow-hidden flex-1">
            <ImageOptimize
              src="https://ucarecdn.com/5862ad5c-e140-460d-9c60-16e4c0b6bf6d/-/quality/better/-/format/webp/-/progressive/yes/"
              className="absolute top-0 left-0 w-full h-full object-cover"
              alt="Giới thiệu về yến sào nhà vui"
            />
          </figure>
        </div>

        <div className="mt-[50px] flex lg:flex-row flex-col-reverse lg:gap-[106px] gap-6 items-center xl:max-w-[1276px] lg:max-w-[1024] lg:mx-auto mx-6 lg:text-start text-center">
          <figure className="lg:!min-w-[660px] min-w-[100vw] sm:!min-h-[440px] !min-h-[292px] lg:rounded-[18px] rounded-none relative overflow-hidden flex-1">
            <ImageOptimize
              src="https://ucarecdn.com/14708c66-d684-4127-8b38-a2fdd57db472/-/quality/better/-/format/webp/-/progressive/yes/"
              className="absolute top-0 left-0 w-full h-full object-cover"
              alt="Giới thiệu về yến sào nhà vui"
            />
          </figure>
          <div className="flex-1">
            <h1 className="text-[60px] lg:!leading-[60px] !leading-normal !font-normal align-middle font-street-sign-sans text-primary-2-5 whitespace-nowrap lg:text-start text-center lg:mb-7">
              YẾN CHƯNG TƯƠI
            </h1>
            <p className="text-body-md-regular !mb-7">
              Yến Chưng Tươi với nhiều hương vị và nguyên liệu được tinh chọn và chế biến theo công thức
              riêng biệt. Với phương pháp thẩm thấu ngược, và làm sạch hoàn toàn bằng thủ công, chúng tôi
              cam đoan giữ được độ dai dòn của sợi yến, và tính nguyên chất của tổ yến.
            </p>
            <Button
              variant="outlined"
              className="!p-0 !w-[179px] !h-12 !gap-1 items-center border-[#FAD743] !text-[#FAD743]  hover:!bg-transparent [&_path]:!stroke-[#FAD743]"
            >
              <p>Xem thêm</p>
              <Icon>
                <ArrowRightIcon />
              </Icon>
            </Button>
          </div>
        </div>

        <div className="lg:px-20 px-[68px] flex lg:flex-row flex-col lg:gap-[60px] gap-[30px] mb-[90px] mt-[100px]">
          <div className="lg:mb-0 mb-[30px]">
            <h5 className="mb-2 lg:text-start text-center">LÝ DO CHỌN</h5>
            <div className="flex items-center justify-center">
              <YenNhaVui />
            </div>
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

async function getData() {
  const res = await fetch("https://be-yensao.onrender.com/static", {
    next: { revalidate: 300 },
  });
  const data: StaticData = await res.json();
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return data;
}
