import { cn } from "@/utils";
import Image from "next/image";
import { ImgHTMLAttributes } from "react";

interface Props {
  className?: string;
  src: string;
  alt: string;
}

export default function ImageOptimize({ className, src, alt }: Props) {
  return (
    <Image
      fill
      priority={true}
      unoptimized={true}
      quality={100}
      src={src}
      alt={alt}
      className={cn("w-full h-full absolute top-0 left-0", className)}
    />
  );
}
