import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Thiết bị âm thanh nhà yến",
  description: siteConfig.description,

  robots: "index, follow",
  keywords: "Yến Sào, Yến Sào Nhà Vui, Yến Sào Ngon quám, Yến Sào Bổ, Yến Sào Ngon Bổ Rẻ",
  publisher: "Vercel",
  other: {
    name: "Thiết bị âm thanh nhà yến",
    image: siteConfig?.ogImage,
  },
  authors: [
    {
      name: "Yến sào nhà vui",
      url: "https://yensaonhavui.vn",
    },
  ],
  openGraph: {
    locale: "vi_VN",
    title: "Thiết bị âm thanh nhà yến",
    description: siteConfig.description,
    type: "website",
    url: "https://yensaonhavui.vn",
    images: [
      {
        url: siteConfig?.ogImage,
        width: 1920,
        height: 1024,
        alt: "Thiết bị âm thanh nhà yến",
      },
      {
        url: siteConfig?.ogImage,
        width: 1024,
        height: 400,
        alt: "Thiết bị âm thanh nhà yến",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thiết bị âm thanh nhà yến",
    description: siteConfig.description,
    creator: "yen sao",
    images: [
      {
        url: siteConfig?.ogImage,
        alt: "Thiết bị âm thanh nhà yến",
        type: "website",
      },
    ],
  },
  creator: "Yến sào nhà vui",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/`,
};

//prettier-ignore
const ITEMS = [
  { h3: "Bản quyền và thương hiệu", h4: " Tất cả những nội dung, hình ảnh, văn bản thiết kế đồ họa đăng tải trên Website này đều thuộc quyền sở hữu trí tuệ của Yến Nhà Vui và được bảo hộ theo quy định của Luật sở hữu trí tuệ Việt Nam. Mọi hành vi sao chép, sửa đổi, trích dẫn vì mục đích thương mại mà không có sự cho phép của Bửu Yến thì đều xâm phạm đến các quyền lợi của Yến Nhà Vui. Do đó, Yến Nhà Vui có quyền yêu cầu người sử dụng bồi thường thiệt hại và chấm dứt việc làm đó ngay khi phát hiện. ", },
  { h3: "Trách nhiệm của Yến Nhà Vui", h4: " Yến Nhà Vui có quyền thay đổi các thông tin và tính năng trên Website mà không cần thông báo trước cho người sử dụng. Yến Nhà Vui có quyền đưa ra các biện pháp an ninh để bảo vệ tính bảo mật cho Website. Các thông tin mà khách hàng cung cấp sẽ được Yến Nhà Vui bảo mật toàn bộ, không tiết lộ cho bên thứ 3. Ngoại trừ được yêu cầu bằng văn bản của đơn vị điều tra theo quy định của pháp luật. Yến Nhà Vui được phép sử dụng những đánh giá, ý tưởng mà bạn đã đưa lên Website cho tất cả các mục đích, bao gồm phát triển sản phẩm và tiếp thị. Yến Nhà Vui sẽ không có trách nhiệm bồi thường hay thưởng cho người cung cấp. ", },
  { h3: "Trách nhiệm của người sử dụng", h4: " Yến Nhà Vui cho phép người dùng xem các thông tin trên Website và chia sẻ cho người khác cùng biết thông tin với mục đích cá nhân, phi thương mại.  Không can thiệp vào việc sử dụng Website của người khác cũng như hoạt động quản lý Website của Yến Nhà Vui. ", },
  { h3: "Điều khoản chung", h4: " Được điều chỉnh và sử dụng theo hệ thống pháp luật Việt Nam. Bất kỳ sự thay đổi nào khi tòa án vô hiệu hóa một vài điều khoản trong bộ luật cũng sẽ không ảnh hưởng đến tính hiệu lực của các điều khoản còn lại. Nếu có bất cứ thông tin gì cho thấy Yến Nhà Vui vi phạm bản quyền của bên thứ 3, hãy liên hệ ngay với Yến Nhà Vui để được giải quyết. ", },
];

const PartnerShipAndCollabrationPage = () => {
  return (
    <div className="lg:px-[180px] lg:py-[90px] px-6 py-10">
      <h3 className="mb-5">Terms and Conditions</h3>
      {ITEMS.map((item) => (
        <>
          <h4 className="mb-5">{item.h3}</h4>
          <p className="mb-10 text-body-md-medium">{item.h4}</p>
        </>
      ))}
    </div>
  );
};

export default PartnerShipAndCollabrationPage;
