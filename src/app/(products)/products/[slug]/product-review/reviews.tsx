import { Rate } from "antd";

export default function Reviews() {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="text-primary-1-7">Đánh giá của các khách hàng</h4>
      {items?.map((item, i) => (
        <div key={i} className="p-2 rounded-lg border border-primary-1-5">
          <div className="flex gap-1 items-center">
            <p className="text-body-lg-semibold">{item?.name}</p>
            <Rate defaultValue={item?.stars} disabled allowHalf />
          </div>
          <p className="text-body-xs-normal">20:23 - 31/10/2023</p>
          <p className="text-body-lg-normal">{item?.content}</p>
        </div>
      ))}
    </div>
  );
}

const items = [
  {
    name: "Nguyễn Thế Anh",
    stars: 4,
    date: new Date(),
    content: "Sản phẩm tốt, dịch vụ chu đáo. Chất lượng xuất sắc. Nên mua trải nghiệm.",
  },
  {
    name: "Nguyễn Thế Anh",
    stars: 5,
    date: new Date(),
    content: "Sản phẩm tốt, dịch vụ chu đáo. Chất lượng xuất sắc. Nên mua trải nghiệm.",
  },
  {
    name: "Nguyễn Thế Anh",
    stars: 2.5,
    date: new Date(),
    content: "Dich vu te :(",
  },
];
