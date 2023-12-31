import { Comment } from "@/interfaces";
import { Rate } from "antd";

export default function Reviews({ comments }: { comments: Comment[] }) {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="text-primary-1-7">Đánh giá của các khách hàng</h4>
      {comments?.map((item, i) => (
        <div key={i} className="p-2 rounded-lg border border-primary-1-5">
          <div className="flex gap-1 items-center">
            <p className="text-body-lg-semibold">{item?.userName}</p>
            <Rate defaultValue={item?.userStar} disabled allowHalf />
          </div>
          <p className="text-body-xs-normal">20:23 - 31/10/2023</p>
          <div
            dangerouslySetInnerHTML={{ __html: item?.userComment }}
            className="mt-1 [&_p]:text-body-lg-normal"
          />
        </div>
      ))}
    </div>
  );
}
