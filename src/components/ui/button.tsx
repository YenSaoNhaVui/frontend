import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center !cursor-pointer gap-1 text-white",
  {
    variants: {
      variant: {
        elevated: "bg-primary-1-5 hover:bg-primary-1-7", // same Filled
        danger: "bg-danger-4 hover:bg-danger-5",
        warning: "bg-warning-4 hover:bg-warning-5",
        tonal: "bg-primary-1-1 hover:primary-1-2",
        success: "bg-success-7 hover:bg-success-8",
        outlined:
          "bg-transparent border border-solid border-primary-1-5 !text-primary-1-5 hover:bg-neutral-3",
        ghost: "bg-transparent hover:bg-neutral-3 !text-black",
      },
      size: {
        xs: "py-[9px] px-4 text-[14px] leading-[22px] font-normal",
        sm: "py-[11px] px-4 text-[14px] leading-[22px] font-medium",
        default: "py-3 px-4 text-[16px] leading-[24px] font-semibold",
        0: "p-0",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        default: "rounded-[50px]",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        "3xl": "rounded-3xl",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "elevated",
      size: "default",
      rounded: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, rounded, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, rounded, className }))}
        {...props}
      ></button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
