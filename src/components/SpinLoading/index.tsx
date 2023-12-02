import { cn } from "@/utils";
import { Spin } from "antd";

export default function SpinLoading({ className }: { className?: string }) {
  return (
    <div className={cn("w-full h-[800px] flex items-center justify-center", className)}>
      <Spin />
    </div>
  );
}
