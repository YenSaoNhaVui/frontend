import Image from "next/image";
import classes from "./background-pattern.module.css";
const BackgroundPattern = () => {
  return (
    <div className={classes.bgPatternContainer}>
      <Image
        src={
          "https://ucarecdn.com/2d50294e-63d6-423e-b6c0-7809f7ac6937/-/preview/-/quality/best/-/format/auto/"
        }
        alt="Yến Sào Nhà Vui Pattern"
        width={1000}
        height={1000}
        priority={true}
        quality={100}
        className={classes.bgPattern}
      />
    </div>
  );
};

export default BackgroundPattern;
