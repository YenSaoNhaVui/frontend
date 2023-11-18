import { colors } from "../../../../system/color";
import Carousel from "./carousel/carousel";
import classes from "./customer-feedback.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const CustomerFeedback = () => {
  return (
    <div className="container m-auto h-screen">
      <div className="w-full h-full flex flex-col gap-4 justify-center">
        <h5 className="text-center">TRẢI NGHIỆM SẢN PHẨM</h5>
        <h3 className="text-center" style={{ color: colors["primary-2-5"] }}>
          NHẬN XÉT TỪ KHÁCH HÀNG
        </h3>
        <Carousel />
      </div>
    </div>
  );
};

export default CustomerFeedback;
