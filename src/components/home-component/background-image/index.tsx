import Image from "next/image";
import classes from "./background-image.module.css";

interface ImageProps {
  src: string;
  alt: string;
}

const BackgroundImage = (props: ImageProps) => {
  const { src, alt } = props;
  return (
    <div className={classes.bgContainer}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={true}
        unoptimized={true}
        quality={100}
        className={classes.bg}
      />
    </div>
  );
};

export default BackgroundImage;
