import Link from "next/link";
import Image from "next/image";
import classes from "./Introduction.module.css";
import { colors } from "../../../../system/color";
const Introduction = () => {
  return (
    <section
      className={`relative min-h-screen gap-12 flex flex-col md:flex-row justify-center items-center pt-24 md:pt-0 ${classes.container}`}
    >
      <div
        className={`relative md:absolute w-full md:w-5/12 h-full z-10 top-0 left-0 flex flex md:flex-row items-center`}
      >
        <div className="relative w-full flex items-center">
          <Image
            src={
              "https://ucarecdn.com/c8187a56-2175-4775-837f-d36d45b0fe7e/-/preview/-/quality/best/-/format/auto/"
            }
            alt="Yến Sào Nhà Vui - Giới Thiệu"
            width={1000}
            height={1000}
            className={classes.image}
          />
          <div className={classes.imageBlur}></div>
          <div className={classes.imageLogoContainer}>
            <img
              src="https://ucarecdn.com/00db6fec-84c5-4b84-b319-68e4fa4db425/"
              className={classes.imageLogo}
            />
          </div>
          <div className={classes.shadowEffectContainer}>
            <Image
              src={
                "https://ucarecdn.com/2ab3738d-542e-40f5-8b27-d5290093def7/-/preview/500x500/-/quality/best/-/format/auto/"
              }
              alt="Yến Nhà Vui - Shadow Effect"
              width={1000}
              height={1000}
              className={`${classes.shadowEffect} mt-8 md:mt-0`}
            />
          </div>
          <div className={classes.shapeTop}></div>
          <div className={classes.shapeRight}></div>
        </div>
      </div>
      <div className="container mx-auto px-8 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="none md:block"></div>
        <div className="flex flex-col gap-4">
          <h5>Giới thiệu</h5>
          <h1>Yến Nhà Vui</h1>
          <p style={{ color: colors["secondary-3"] }}>
            Thương hiệu "Yến Sào Nhà Vui" đã ghi dấu ấn mạnh mẽ trong lĩnh vực Yến sào trong suốt 10 năm
            qua. Chúng tôi tự hào cung cấp các sản phẩm Yến sào tự nhiên, không qua bất kỳ quá trình chế
            biến hay xử lý hóa học nào, để đảm bảo giữ nguyên toàn bộ giá trị dinh dưỡng và hương vị đặc
            biệt của loại thực phẩm này.
          </p>
          <Link href={"/"} style={{ color: colors["primary-2-6"] }}>
            Xem thêm
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
