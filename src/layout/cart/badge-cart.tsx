import { cn } from "@/utils";
import React from "react";

interface Props {
  className?: string;
  content: number;
  children: React.ReactElement;
}

export default function Badge({ className, content, children, ...props }: Props) {
  return (
    <div className="relative">
      {children}
      <p
        className={cn(
          "absolute top-1 lg:-right-[3px] right-0 flex items-center justify-center z-30 rounded-full text-center lg:text-body-md-semibold lg:w-5 w-2.5 h-[13px] bg-[#3ABF9C] text-white text-body-xs-semibold",
          className
        )}
      >
        {content}
      </p>
    </div>
  );
}
