import SkeletonButton from "antd/es/skeleton/Button";
import dynamic from "next/dynamic";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => (
    <SkeletonButton className="!w-full !h-full [&_span]:!w-full [&_span]:!h-full [&_span]:!rounded-none [&_span]:!bg-black/20" />
  ),
});

type Props = {
  value?: string;
  onChange?: (value: string) => void;
};

export default function FormReactQuill({ value: defaultValue, onChange }: Props) {
  const [value, setValue] = useState<string>();

  function handleChange(v: string): void {
    setValue(v);
    onChange?.(v);
  }
  return <ReactQuill value={defaultValue || value} onChange={handleChange} theme="snow" />;
}
