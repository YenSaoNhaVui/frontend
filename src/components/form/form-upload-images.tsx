import { PlusOutlined } from "@ant-design/icons";
import { Form, FormItemProps, Modal, Upload, UploadFile } from "antd";
import { NamePath } from "antd/es/form/interface";
import { RcFile } from "antd/es/upload";
import { useState } from "react";

interface Props<T> extends FormItemProps {
  name: NamePath<T>;
  label: string;
  singleOnly?: boolean;
}

// NOTE copy from Antd docs
export default function FormUploadImages<T>({ name, label, singleOnly = false, ...props }: Props<T>) {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1));
  };

  return (
    <>
      <Form.Item<T>
        name={name}
        label={label}
        valuePropName="fileList"
        getValueFromEvent={normFile}
        {...props}
      >
        <Upload
          maxCount={singleOnly ? 1 : 0}
          accept="image/*"
          action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
          listType="picture-card"
          onPreview={handlePreview}
        >
          <div>
            <PlusOutlined />
            <div className="mt-2">Chọn ảnh</div>
          </div>
        </Upload>
      </Form.Item>
      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img alt="example" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </>
  );
}

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
