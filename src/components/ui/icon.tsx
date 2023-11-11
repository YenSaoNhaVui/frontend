import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { cn } from "@/utils";
const IconVariants = cva(
  "border-0 margin-0 outline-none p-0 align-middle inline-flex items-center justify-center overflow-hidden relative w-[90%] h-[90%] ",
  {
    variants: {
      size: {
        xs: "w-3 h-3 min-h-[12px] min-w-[12px]",
        sm: "w-4 h-4 min-h-[16px] min-w-[16px]",
        md: "lg:w-5 lg:h-5 lg:min-h-[20px] lg:min-w-[20px] w-3 h-3 min-h-[12px] min-w-[12px]",
        lg: "lg:w-6 lg:h-6 lg:min-h-[24px] lg:min-w-[24px] w-4 h-4 min-h-[16px] min-w-[16px]",
        xl: "lg:w-7 lg:h-7 lg:min-h-[28px] lg:min-w-[28px] w-5 h-5 min-h-[20px] min-w-[20px]",
      },
      variant: {
        default: "",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  }
);

interface Props
  extends VariantProps<typeof IconVariants>,
    HTMLAttributes<HTMLDivElement> {
  className?: string;
}

function Icon({ size, className, ...props }: Props) {
  return (
    <div
      className={cn(
        "[&_svg]:flex [&_svg]:items-center [&_svg]:justify-center",
        IconVariants({ size, className })
      )}
      {...props}
    />
  );
}
export default Icon;
