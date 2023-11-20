import Link from "next/link";

import classes from "./produce-process.module.css";
import { colors } from "../../../../system/color";

const ProduceProcess = () => {
  return (
    <section className="w-full min-h-screen pt-12 md:pt-0 mx-auto">
      <div className="relative h-full flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="md:min-h-screen container m-auto pt-12 md:pt-0 px-8 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-4 justify-center">
            <h5>QUY TRÌNH SẢN XUẤT</h5>
            <h4 style={{ color: colors["primary-2-5"] }}>
              NGHIÊM NGẶT, ĐẢM BẢO <br /> AN TOÀN VỆ SINH THỰC PHẨM
            </h4>
            <p style={{ color: colors["secondary-3"] }}>
              Thương hiệu "Yến Sào Nhà Vui" đã ghi dấu ấn mạnh mẽ trong lĩnh vực Yến sào trong suốt 10
              năm qua. Chúng tôi tự hào cung cấp các sản phẩm Yến sào tự nhiên, không qua bất kỳ quá
              trình chế biến hay xử lý hóa học nào, để đảm bảo giữ nguyên toàn bộ giá trị dinh dưỡng và
              hương vị đặc biệt của loại thực phẩm này.
            </p>
            <Link href={"/"} style={{ color: colors["primary-2-6"] }}>
              Xem thêm
            </Link>
          </div>
          <div className="hidden md:block"></div>
        </div>
        <div className="relative md:absolute top-50 w-full md:w-1/2 md:h-1/2 ms-0 md:ms-12 right-0 grid grid-cols-3 gap-6">
          <div className="grid grid-rows-2">
            <div className={classes.imageContainer1}></div>
            <div className={classes.imageContainer2}></div>
          </div>
          <div className="relative col-span-2 h-full flex items-center">
            <div className={classes.image3}>
              <div className={classes.imageContainer3}></div>
              <div className={classes.shape}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProduceProcess;
