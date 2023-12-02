import { cn } from "@/utils";
import SkeletonButton from "antd/es/skeleton/Button";

export default function CardBlogLoading({ className }: { className?: string }) {
  return (
    <div className={cn("p-2.5 rounded-lg bg-primary-1-7", className)}>
      <div className="max-w-4xl mx-auto">
        <div className="relative pt-[71%] overflow-hidden">
          <SkeletonButton className="!w-full !h-full absolute top-0 left-0 rounded-lg [&_span]:!bg-black/30" />
        </div>
        <SkeletonButton className="!w-[150px] !h-[30px] mt-2 [&_span]:!mt-0 [&_span]:!bg-black/30" />
        <div className="flex items-center mt-1 gap-1">
          <SkeletonButton className="[&_span]:!w-[20px] [&_span]:!min-w-[20px] [&_span]:!h-[20px] [&_span]:!rounded-full [&_span]:!bg-black/30" />
          <SkeletonButton className="[&_span]:!w-[72px] [&_span]:!min-w-[72px] [&_span]:!h-[22px] [&_span]:!bg-black/30" />
        </div>
        <SkeletonButton className="!w-full !h-[88px] [&_span]:!bg-black/30 mt-1 [&_span]:!mt-0" />
      </div>
    </div>
  );
}
