"use client";
import { cn } from "@/utils";
import Image from "next/image";
import { ImgHTMLAttributes } from "react";

interface Props {
  className?: string;
  src: string;
  alt: string;
}

export default function ImageOptimize({ className, src, alt }: Props) {
  const imageLoader = ({ src, width, quality }) => {
    return src;
  };
  return (
    <Image width={1920} height={1024} loader={imageLoader} src={src} className={className} alt={alt} />
  );
}
