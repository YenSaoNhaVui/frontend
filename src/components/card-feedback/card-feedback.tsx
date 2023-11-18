import React from "react";

import classes from "./card-feedback.module.css";
import { colors } from "../../../system/color";
import Image from "next/image";

const CardFeedBack = () => {
  return (
    <div className={`${classes.card}`}>
      <div className={classes.cardBody}>
        <div className={classes.cardThumb}>
          <Image
            src={
              "https://ucarecdn.com/31457883-fac6-4a9a-aa88-ac4f75a3f09c/-/preview/500x500/-/quality/best/-/format/auto/"
            }
            alt=""
            width={60}
            height={60}
            className={classes.cardImage}
          />
        </div>
        <h5 className="mt-4" style={{ color: colors["primary-1-6"] }}>
          Nguyễn Thế Anh
        </h5>
        <p style={{ color: colors["primary-1-6"] }}>Quản lý nhà hàng</p>
        <p className="mt-4 text-black">
          Sản phẩm rất tốt, dùng một thời gian sẽ cảm thấy cải thiện sức khỏe,
          da dẻ hồng hào. Hương vị thơm ngon, ăn mỗi ngày không lo ngấy!
        </p>
      </div>
    </div>
  );
};

export default CardFeedBack;
