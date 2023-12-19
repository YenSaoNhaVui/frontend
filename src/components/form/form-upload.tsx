import { PlusOutlined } from "@ant-design/icons";
import { Form, FormItemProps, Modal, Upload, UploadFile, message } from "antd";
import { NamePath } from "antd/es/form/interface";
import { RcFile } from "antd/es/upload";
import { useState } from "react";

interface Props<T> extends FormItemProps {
  name: NamePath<T>;
  label: string;
  singleOnly?: boolean;
  data: any;
}

// NOTE copy from Antd docs
export default function FormUploadVideos<T>({
  name,
  label,
  singleOnly = false,
  data,
  ...props
}: Props<T>) {
  const [media, setMedia] = useState<{
    url: string;
    type: string;
  }>(
    !data
      ? { url: "", type: "" }
      : { url: data[0]?.url, type: data[0].name == "video.mp4" ? "video" : "image" }
  );

  const onChange = (file: UploadFile) => {
    if ((file as any)?.fileList[0]) {
      setMedia(
        (file as any)?.fileList[0].originFileObj.type.startsWith("video")
          ? {
              url: URL.createObjectURL((file as any)?.fileList[0]?.originFileObj),
              type: "video",
            }
          : {
              url: URL.createObjectURL((file as any)?.fileList[0]?.originFileObj),
              type: "img",
            }
      );
    } else {
      console.log(123);
      setMedia({ url: "", type: "" });
    }
  };

  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type.startsWith("video") || file.type.startsWith("image");
    if (!isJpgOrPng) {
      message.error("Bạn chỉ có thể up ảnh hoặc video");
    }
    const isLt2M = file.size / 1024 / 1024 < 100;
    if (!isLt2M) {
      message.error(`Video và ảnh nhỏ hơn  ${100}MB!`);
      return false;
    }
    return isJpgOrPng && isLt2M;
  };

  return (
    <div>
      <Form.Item<T>
        name={name}
        label={label}
        valuePropName="fileList"
        getValueFromEvent={normFile}
        {...props}
      >
        <Upload
          maxCount={singleOnly ? 1 : 0}
          action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
          listType="picture-card"
          beforeUpload={beforeUpload}
          onChange={onChange as any}
        >
          <div>
            <PlusOutlined />
            <div className="mt-2">Chọn Video hoặc ảnh</div>
          </div>
        </Upload>
      </Form.Item>
      {media?.url != "" &&
        (media?.type == "video" ? (
          <video
            src={media?.url}
            style={{ width: "560px", height: "315px" }}
            autoPlay
            muted={true}
            controls
          />
        ) : (
          <img src={media?.url} style={{ width: "560px", height: "315px" }} />
        ))}
    </div>
  );
}

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
