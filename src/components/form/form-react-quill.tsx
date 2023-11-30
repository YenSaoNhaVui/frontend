import SkeletonButton from "antd/es/skeleton/Button";
import dynamic from "next/dynamic";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { UploadFile } from "antd";

import ImageUploader from "quill-image-uploader";
import { Quill } from "react-quill";
import { uploadImages } from "@/utils";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => (
    <SkeletonButton className="!w-full !h-full [&_span]:!w-full [&_span]:!h-full [&_span]:!rounded-none [&_span]:!bg-black/20" />
  ),
});
Quill.register("modules/imageUploader", ImageUploader);
const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
    ["link", "image"],
    ["clean"],
  ],
  imageUploader: {
    upload: async (file: File) => {
      const imageURLs = await uploadImages([{ originFileObj: file } as UploadFile]);
      return imageURLs[0];
    },
  },
};

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
  return (
    <ReactQuill
      modules={modules}
      value={defaultValue || value}
      onChange={handleChange}
      theme="snow"
      className="!bg-white"
    />
  );
}
