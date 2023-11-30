import { cn } from "@/utils";
import React from "react";

const ITEMS = [
  {
    h3: "Mục đích thu thập thông tin",
    h4: "Việc thu thập thông tin của trang web của chúng tôi với các mục đích sau:",
    items: [
      "Cung cấp đúng sản phẩm, dịch vụ theo nhu cầu của người dùng",
      "Hỗ trợ người dùng mọi ý kiến, thắc mắc một cách nhanh nhất",
      "Ngăn ngừa các hoạt động xâm nhập, đánh cắp tài khoản, các hoạt động giả mạo",
    ],
  },
  {
    h3: "Phạm vi thu thập thông tin",
    items: [
      "Là một người dùng mạng, bạn không cần cung cấp bất cứ thông tin nào cho trang web nếu bạn không thật sự mong muốn. Chúng tôi chỉ thu thập thông tin khi bạn thực sự tự nguyện.",
      "Những thông tin chúng tôi thu thập sẽ gồm có: tên, tuổi, địa chỉ mail, số điện thoại, giới tính, và các thông tin liên quan đến các thiết bị dùng để truy cập trang web của chúng tôi.",
      "Nếu bạn không đồng ý cung cấp cho chúng tôi những thông tin cần thiết trong trường hợp bắt buộc, chúng tôi sẽ không thể cung cấp được những thông tin thật sự cần thiết và đúng với nhu cầu của bạn.",
    ],
  },
  {
    h3: "Phạm vi sử dụng thông tin",
    h4: "Những thông tin, dữ liệu thu thập được, đều được sử dụng để phục vụ, chăm sóc khách hàng của Yến Nhà Vui được tốt hơn:",
    items: [
      "Chúng tôi sử dụng dữ liệu cá nhân để cung cấp cho bạn những thông tin, và xử lý những yêu cầu từ bạn ",
      "Để hiểu rõ những yêu cầu, nhu cầu của bạn về trang web của chúng tôi, và dựa vào đó để thiết kế, chỉnh sửa website sao cho phù hợp với nhu cầu trải nghiệm của người sử dụng.",
      "Để đáp ứng tốt nhất về các nhu cầu của bạn về một sản phẩm/dịch vụ của chúng tôi. Để thông báo cho bạn về các chính sách, các chương trình khuyến mãi đang và sắp diễn ra của chúng tôi",
    ],
  },
  {
    h3: "Địa chỉ của đơn vị thu thập và quản lý thông tin",
    h4: (
      <>
        66/9/27 KP6A, Đường Tân Thới Nhất 06, Phường Tân Thới Nhất, Quận 12 <br />
        Website: <u>yennhavui.vn</u>
      </>
    ),
  },
  {
    h3: "Chỉnh sửa dữ liệu cá nhân của mình",
    h4: "Mọi yêu cầu về chỉnh sửa thông tin, Quý khách hàng vui lòng gọi Hotline: 0705195195 để yêu cầu chỉnh sửa thông tin dữ liệu cá nhân được nhanh chóng và chính xác.",
  },
  {
    h3: "Khiếu nại về thông tin cá nhân",
    h4: "Mọi yêu cầu về khiếu nại thông tin cá nhân, Quý khách hàng vui lòng gọi Hotline: 0705195195 để được giải quyết.",
  },
  {
    h3: "Cam kết bảo mật thông tin",
    h4: "Bằng việc sử dụng trang web của chúng tôi, bạn xác nhận và đồng ý cung cấp những thông tin của bạn cho chúng tôi. Và chúng tôi hiểu rằng đây là trách nhiệm của chúng tôi về sự bảo mật thông tin, và chúng tôi nỗ lực để bảo vệ thông tin của bạn. Với sự đồng thuận về chính sách bảo mật này của bạn, Yến Nhà Vui có thể cập nhật, sửa đổi, bổ sung chính sách bảo mật này bất kỳ thời điểm nào. Bản sửa đổi, bổ sung có hiệu lực ngay sau khi chúng tôi cập nhật, sau khi chính sách được cập nhật, người dùng sử dụng website này đồng nghĩa người dùng đã hiểu và đồng ý với chính sách bảo mật của Yến Nhà Vui.",
    items: [
      "Cam kết giữ an toàn, bảo mật thông tin cho người dùng, cam kết không cung cấp thông tin cho đơn vị bên thứ 3. Không trao đổi mua bán thông tin của người dùng với mục đích thương mại.",
      "Cam kết bảo vệ thông tin người dùng theo đúng luật của nhà nước Việt Nam về việc bảo mật thông tin người sử dụng.",
      "Các chính sách về bảo mật thông tin cá nhân của người dùng được bảo vệ khi người dùng đăng ký, đăng nhập trên hệ thống website: yennhavui.vn.",
    ],
  },
];
const PrivacyPolicyPage = () => {
  return (
    <div className="lg:px-[180px] lg:py-[90px] px-6 py-10">
      <h3 className="mb-5">Privacy Policy</h3>
      <p className="mb-10 text-xl">
        Chào mừng bạn đến với Website Yến Nhà Vui. Chúng tôi nghiêm túc thực hiện trách nhiệm của mình
        liên quan đến bảo mật thông tin theo các quy định về bảo mật thông tin cá nhân của pháp luật Việt
        Nam. Và cam kết tôn trọng quyền riêng tư và sự quan tâm của người dùng đối với trang web
        yennhavui.vn. Các chính sách bảo mật nhằm mục đích giúp bạn hiểu rõ được những thông tin mà chúng
        tôi thu thập, những lý do mà chúng tôi thu thập và cách bạn có thể cập nhật, xuất và xóa thông
        tin của mình.
      </p>
      {ITEMS.map((item) => (
        <div className="mb-10">
          <h4 className="mb-5">{item.h3}</h4>
          {item.h4 && <p className={cn("text-xl", item.items ? "mb-0" : "mb-10")}>{item.h4}</p>}
          {item.items?.map((i) => (
            <div className="flex">
              <p className="text-xl mb-0 mx-1">•</p>
              <p className="text-xl mb-0">{i}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PrivacyPolicyPage;
