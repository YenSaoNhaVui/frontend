import Editor from "@/components/editor";
import { cn } from "@/utils/cn";
import { useField } from "formik";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  isEditor?: boolean;
  className?: string;
}

export default function FormikInput({ label, name, isEditor = false, className, ...props }: Props) {
  const [field, error, header] = useField(name);
  const onChangeEditor = (message: any) => {
    if (message == "<p><br></p>") {
      header?.setValue("");
    } else {
      header?.setValue(message);
    }
  };
  return (
    <div className="flex flex-col">
      <label className="lg:text-body-lg-semibold text-body-md-semibold mb-1">
        {label}
        <span className="text-warning-5 ml-1">*</span>
      </label>
      {isEditor ? (
        <Editor
          className={cn("[&>.ql-toolbar.ql-snow]:!px-3 [&_.ql-clean]:!hidden", className, {
            "[&_.ql-toolbar]:!border-danger-5 [&_.ql-container]:!border-danger-5 [&>.ql-toolbar.ql-snow]:!px-3":
              error?.error,
          })}
          value={field?.value}
          onValueChange={onChangeEditor}
        />
      ) : (
        <input
          {...field}
          name={name}
          className={cn(
            "text-body-lg-normal px-3 py-2 bg-transparent outline-none max-w-[300px] border-[2px] border-solid border-white rounded-lg",
            className,
            {
              "!border-danger-5": error?.error && error?.touched,
            }
          )}
          {...props}
        />
      )}
    </div>
  );
}
