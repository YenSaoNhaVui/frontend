"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
// import SpinLoading from "./SpinLoading";
import "react-quill/dist/quill.bubble.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
];
interface Props {
  value: any;
  onValueChange?: any;
  isReadOnly?: boolean;
}
export default function Editor({ value, onValueChange, isReadOnly }: Props) {
  const [currentValue, setCurrentValue] = useState(value);
  useEffect(() => {
    if (onValueChange) onValueChange(currentValue);
  }, [currentValue]);
  if (typeof window !== "undefined") {
    return isReadOnly ? (
      <ReactQuill
        placeholder="Enter description here..."
        theme="bubble"
        value={value}
        readOnly={true}
      />
    ) : (
      <ReactQuill
        placeholder="Enter description here..."
        theme="snow"
        value={currentValue}
        onChange={setCurrentValue}
      />
    );
  } else return <></>;
}
