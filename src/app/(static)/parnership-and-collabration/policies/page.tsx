import React from "react";

const ITEMS = [
  {
    h3: "LÀM CTV TẠI YẾN NHÀ VUI BẠN NHẬN ĐƯỢC NHỮNG GÌ?",
    h4: " Học về sản phẩm yến sào của công ty và kỹ thuật internet marketing (sẽ được cty training đào tạo). Tìm kiếm khách hàng, đăng bán sản phẩm lên Facebook, Zalo các Group bán hàng, diễn đàn mua bán. Làm việc trong một môi trường năng động, hiện đại và chuyên nghiệp. Được tiếp xúc với việc kinh doanh thực tế, giúp bạn có thêm kinh nghiệm về Marketing, kinh nghiệm bán hàng, kỹ năng giao tiếp và kỹ năng làm việc. Hỗ trợ setup mở cửa hàng yến sào nếu có vốn (thiết kế bảng hiệu, tủ trưng bày, phần mềm quản lý bán hàng, tuyển dụng NV bán hàng, quy trình tư vấn…) ",
  },
  {
    h3: "Vì sao nên chọn YẾN NHÀ VUI",
    h4: (
      <>
        Yến nguyên chất 100%
        <br />
        Sản phẩm đạt tiêu chuẩn Quốc tế ISO 22000:2018 và HACCP về vệ sinh an toàn thực phẩm trong từng
        hũ yến.
        <br />
        Bao bì được thiết kế sang trọng, phù hợp làm quà biếu tặng ngày Tết.
        <br />
        Chất lượng nguồn hàng luôn được đảm bảo do nhà máy sản xuất ở TP. HCM.
        <br />
        Giá cả hợp lý với đại đa số khách hàng.
        <br />
        Hỗ trợ phát triển thị trường cho các Đại lý và CTV bằng các chiến dịch marketing xuyên suốt và
        phủ sóng đẩy mạnh thương hiệu, chiến lược kinh doanh, ưu đãi.
        <br />
        Bên A: CÔNG TY CỔ PHẦN XNK ™ DV YẾN NHÀ VUI. MST 0317830320 . Thương hiệu YẾN NHÀ VUI, gọi tắt là{" "}
        {`"Yến NHÀ VUI"`}.
        <br />
        Bên B: Nhà phân phối, cộng tác viên, nhân viên kinh doanh tự do, người tham gia bán hàng trên hệ
        thống Yến sào NHÀ VUI với đăng ký thông qua đường liên kết giới thiệu của tuyến trên. Gọi chung
        là Nhà Phân Phối. Viết tắt là NPP.
        <br />
        Có 2 đối tượng được nêu trong NPP:
        <br />
        Cấp quản lý nhóm: quản lý trưởng nhóm & cộng tác viên: Gọi tắt là BQL
        <br />
        Cấp cộng tác viên, người bán hàng : Gọi tắt là CTV
        <br />
        HOA HỒNG SẢN PHẨM
        <br />
        Sản phẩm bạch yến thô nguyên tổ, yến sợi tinh chế: 10% giá bán
        <br />
        Sản phẩm yến nguyên tổ rút lông/yến sơ chế: 10% giá bán
        <br />
        Các sản phẩm yến chưng tươi: 10% giá bán
      </>
    ),
  },
];
const PartnerShipAndCollabrationPage = () => {
  return (
    <div className="lg:px-[180px] lg:py-[90px] px-6 py-10">
      <h3 className="mb-5">Chính sách</h3>
      <p className="mb-10 text-body-md-medium">
        Yến Nhà Vui mở rộng mô hình kinh doanh, hoạt động trên thị trường. Chúng tôi cần những con người
        có đam mê kinh doanh để cùng tham gia vào đội ngũ nhân viên. Yến Nhà Vui có nhiều chính sách đãi
        ngộ, tạo ra cơ hội giúp các bạn khẳng định bản thân. Chỉ cần tâm huyết và ham học hỏi các bạn sẽ
        có một môi trường làm việc lành mạnh, thân thiện, chuyên nghiệp, đầy tiềm năng. Chỉ cần bạn là
        người có niềm đam mê kinh doanh không kể là cửa hàng hay cá nhân. Yến Nhà Vui luôn sẵn sàng tạo
        điều kiện thuận lợi cho đại lý và cộng tác viên khi:
        <br />
        Bạn là chủ cửa hàng về thực phẩm sức khỏe đang tìm kiếm một nguồn hàng uy tín, chất lượng.
        <br /> Bạn là cá nhân mong muốn kiếm thêm thu nhập vào ngày Tết trong thời gian rảnh rỗi từ việc
        kinh doanh online.
        <br />
        Bạn là mẹ bỉm sữa, các gia đình có mặt tiền thuận lợi cho việc kinh doanh, làm đại lý.
        <br />
        Bạn muốn lấy sỉ yến chưng, muốn hợp tác kinh doanh lâu dài.
        <br /> Hoặc bất kỳ ai muốn có thêm thu nhập với vốn 0 đồng hãy liên hệ ngay với Yến Nhà Vui.
      </p>
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
