import { cn } from "@/utils";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Rate } from "antd";
import { Dispatch, SetStateAction } from "react";

export default function ProductRate({
  setStars,
  star,
}: {
  setStars: Dispatch<SetStateAction<number>>;
  star: number;
}) {
  const renderStar = (index: number, { value }: { value: number }) => {
    const ceilValue = Math.ceil(value);
    const isHalf = value !== ceilValue && index === ceilValue - 1;
    const fillColor = isHalf || value >= index + 1 ? "#204F4F" : "transparent";
    const strokeColor = value >= index + 0.5 ? "#204F4F" : "#204F4F";
    return (
      <div className="half-filled-rate-star">
        <div className="!h-5 !w-5">
          <div
            className={cn("", {
              "max-w-[10px] overflow-hidden": isHalf,
            })}
          >
            <StarFilled
              className="!w-5 !h-5 [&_svg]:w-full [&_svg]:h-full relative z-10"
              style={{ color: fillColor }}
            />
          </div>
        </div>
        <StarOutlined
          className="!w-5 !h-5 [&_svg]:w-full [&_svg]:h-full"
          style={{ color: strokeColor, position: "absolute", top: 0, left: 0 }}
        />
      </div>
    );
  };
  return (
    <div className="flex items-center gap-2.5 mb-5">
      <p className="text-body-md-semibold">
        Đánh giá của quý khách <span className="text-danger-5">*</span>
      </p>
      <Rate
        onChange={(e) => setStars(e)}
        value={star}
        allowHalf
        character={({ index, value }) => renderStar(index || 0, { value: value || 0 })}
      />
    </div>
  );
}
