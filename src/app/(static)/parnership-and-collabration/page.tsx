import React from "react";
import Card from "./card";
import BreadCrumbs from "@/components/bread-crumbs";

type Props = {};

const ITEMS = [
  {
    title: "Chính sách đại lý",
    description:
      " Yến Nhà Vui mở rộng mô hình kinh doanh, hoạt động trên thị trường. Chúng tôi cần những con người có đam mê kinh doanh để cùng tham gia vào đội ngũ nhân viên. Yến Nhà Vui có nhiều chính sách đãi ngộ, tạo ra cơ hội giúp các bạn khẳng định bản thân. Chỉ cần tâm huyết và ham học hỏi các bạn sẽ có một môi trường làm việc lành mạnh, thân thiện, chuyên nghiệp, đầy tiềm năng. Chỉ cần bạn là người có niềm đam mê kinh doanh không kể là cửa hàng hay cá nhân. Yến Nhà Vui luôn sẵn sàng tạo điều kiện thuận lợi cho đại lý và cộng tác viên khi: Bạn là chủ cửa hàng về thực phẩm sức khỏe đang tìm kiếm một nguồn hàng uy tín, chất lượng. Bạn là cá nhân mong muốn kiếm thêm thu nhập vào ngày Tết trong thời gian rảnh rỗi từ việc kinh doanh online. Bạn là mẹ bỉm sữa, các gia đình có mặt tiền thuận lợi cho việc kinh doanh, làm đại lý. Bạn muốn lấy sỉ yến chưng, muốn hợp tác kinh doanh lâu dài. Hoặc bất kỳ ai muốn có thêm thu nhập với vốn 0 đồng hãy liên hệ ngay với Yến Nhà Vui. ",
    link: "/policies",
  },
  {
    title: "Privacy Policy",
    description:
      " Tất cả những nội dung, hình ảnh, văn bản thiết kế đồ họa đăng tải trên Website này đều thuộc quyền sở hữu trí tuệ của Yến Nhà Vui và được bảo hộ theo quy định của Luật sở hữu trí tuệ Việt Nam. Mọi hành vi sao chép, sửa đổi, trích dẫn vì mục đích thương mại mà không có sự cho phép của Bửu Yến thì đều xâm phạm đến các quyền lợi của Yến Nhà Vui. Do đó, Yến Nhà Vui có quyền yêu cầu người sử dụng bồi thường thiệt hại và chấm dứt việc làm đó ngay khi phát hiện. ",
    link: "/privacy-policy",
  },
  {
    title: "Terms and Conditions",
    description:
      " Tất cả những nội dung, hình ảnh, văn bản thiết kế đồ họa đăng tải trên Website này đều thuộc quyền sở hữu trí tuệ của Yến Nhà Vui và được bảo hộ theo quy định của Luật sở hữu trí tuệ Việt Nam. Mọi hành vi sao chép, sửa đổi, trích dẫn vì mục đích thương mại mà không có sự cho phép của Bửu Yến thì đều xâm phạm đến các quyền lợi của Yến Nhà Vui. Do đó, Yến Nhà Vui có quyền yêu cầu người sử dụng bồi thường thiệt hại và chấm dứt việc làm đó ngay khi phát hiện. ",
    link: "/terms-conditions",
  },
];

export default function ParnerShipAndCollabration({}: Props) {
  return (
    <div className="lg:max-w-[1267px] lg:mx-auto lg:mt-[23px] mb-20 mx-6 mt-5">
      <BreadCrumbs linkBack="/" titleCurrent="Đối tác - Liên kết" titlePrev="Trang chủ" />
      <h3 className="mb-5 mt-6">Đối tác - Liên kết</h3>
      <div className="grid lg:grid-cols-3 gap-5">
        {ITEMS.map((item) => (
          <Card key={item?.title} title={item.title} description={item.description} link={item.link} />
        ))}
      </div>
    </div>
  );
}
