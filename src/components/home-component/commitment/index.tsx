import Link from "next/link";
import classes from "./Commitment.module.css";
const Commitment = () => {
  return (
    <section
      className={`container-sm pt-12 md:pt-0 px-12 md-px-0 md:container mx-auto grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-4 content-center ${classes.container}`}
    >
      <div className="text-center md:text-start">
        <h5 className={classes.title}>LÝ DO CHỌN</h5>
        <h2>yến nhà vui</h2>
        <Link href={"/"} className="w-full block text-end md:text-start">
          Xem thêm
        </Link>
      </div>
      <div className="col-span-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-12 md:mt-0">
          <div className="text-center md:text-start">
            <h5 className={classes.title}>CHẤT LƯỢNG</h5>
            <p className="mt-4">
              Quy trình khai thác nghiêm ngặt, chỉ những tổ yến hình thành, được nuôi dưỡng trên 6 tháng
              mới được thu hoạch về Nhà Vui.
            </p>
          </div>
          <div className="text-center md:text-start">
            <h5 className={classes.title}>CAO CẤP</h5>
            <p className="mt-4">
              Yến Nhà Vui tự tin với gu thẩm mỹ tinh tế cùng một sản phẩm được nâng niu bởi những người
              thợ lành nghề sẽ truyền tải được những thông điệp của sự trân trọng, tình thân.
            </p>
          </div>
          <div className="text-center md:text-start">
            <h5 className={classes.title}>UY TÍN</h5>
            <p className="mt-4">
              Hơn 10 năm hoạt động trong nghề, chữ TÂM và TÍN luôn đồng hành cùng Yến Nhà Vui để mang đến
              những sản phẩm tốt nhất, sang trọng nhất với chất lượng thượng hạng.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commitment;
