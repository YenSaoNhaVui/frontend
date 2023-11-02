import { cn } from "@/utils";
import React from "react";

interface Props {
  className?: string;
  content: number;
  children: React.ReactElement;
}

export default function Badge({
  className,
  content,
  children,
  ...props
}: Props) {
  return (
    <div className="relative">
      {children}
      <p
        className={cn(
          "absolute top-1 -right-[3px] flex items-center justify-center z-30 rounded-full text-center text-body-md-semibold w-5 bg-[#3ABF9C] text-white",
          className
        )}
      >
        {content}
      </p>
    </div>
  );
}
