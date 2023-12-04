import { cn } from "@/utils";
import SkeletonButton from "antd/es/skeleton/Button";

export default function ProductProductCardLoading({ className }: { className?: string }) {
  return (
    <div className={cn("w-full", className)}>
      <figure className="pt-[100%] relative bg-[#F2D65C] rounded-t-xl">
        <SkeletonButton className="!w-full !h-full absolute top-0 left-0 rounded-lg [&_span]:!bg-black/30" />
      </figure>
      <div className="p-2.5 bg-primary-1-8 rounded-b-lg">
        <div className="flex items-start justify-between mb-1">
          <SkeletonButton className="!w-[80px] !h-[22px] [&_span]:!bg-black/30" />
        </div>
        <SkeletonButton className="!w-full !h-[26px] mb-[30px] [&_span]:!bg-black/30" />
        <div className="flex items-center justify-between">
          <SkeletonButton className="lg:!w-[120px] !w-[100px] !h-[30px] [&_span]:!bg-black/30" />
          <SkeletonButton className="[&_span]:!min-w-[32px] [&_span]:!w-[32px] [&_span]:!h-[32px] [&_span]:!rounded-full [&_span]:!bg-black/30" />
        </div>
      </div>
    </div>
  );
}
