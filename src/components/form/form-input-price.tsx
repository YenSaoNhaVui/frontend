import { cn } from "@/utils";
import { InputNumber, InputNumberProps } from "antd";

export function FormInputPrice({ className, ...props }: InputNumberProps) {
  return (
    <InputNumber
      className={cn("min-w-[120px]", className)}
      controls={false}
      suffix="vnđ"
      formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      parser={(value) => value!.replace(/\$\s?|(,*)/g, "")}
      {...props}
    />
  );
}
