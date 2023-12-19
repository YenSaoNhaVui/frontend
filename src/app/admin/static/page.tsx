"use client";
import SpinLoading from "@/components/SpinLoading";
import FormUploadImages from "@/components/form/form-upload-images";
import FormUpload from "@/components/form/form-upload";
import useAsync from "@/hooks/use-async";
import { StaticData } from "@/interfaces";
import { getStatic, setStatic } from "@/service";
import { preprocessImages, uploadImages } from "@/utils";
import { App, Button, Form, Layout, UploadFile } from "antd";
import React, { useState } from "react";
import crypto from "crypto";
import axios from "axios";

type Props = {};

export default function StaticAdminPage({}: Props) {
  const { message } = App.useApp();
  const { data, loading } = useAsync<StaticData>(async () => {
    const data = await getStatic();
    data.homeBackground = data.homeBackground
      ? preprocessImages([data?.homeBackground as string])
      : undefined;
    data.homeBackgroundMobile = data.homeBackgroundMobile
      ? preprocessImages([data?.homeBackgroundMobile as string])
      : undefined;
    data.videoIntroduce = data?.videoIntroduce
      ? preprocessImages(
          [data?.videoIntroduce?.url as string],
          data?.videoIntroduce?.type == "video" ? "video.mp4" : "image.pnp"
        )
      : undefined;
    return data;
  });
  const [submitLoading, setSubmitLoading] = useState<boolean>(false);
  const uploadVideo = async (fileUpload: any) => {
    try {
      const url = "https://api.cloudinary.com/v1_1/dhuidklzm/video/upload";
      const formData = new FormData();
      const date = Math.floor(new Date()?.getTime() / 1000)?.toString();
      const dataString = `public_id=${fileUpload?.name}&timestamp=${date}M_6pw9TJfddei6q-WF2B643EfPs`;
      const sha1Hash = crypto.createHash("sha1");
      sha1Hash.update(dataString);
      const sha1Signature = sha1Hash.digest("hex");
      formData.append("file", fileUpload);
      formData.append("api_key", "988777967752791");
      formData.append("public_id", fileUpload?.name);
      formData.append("timestamp", date);
      formData.append("signature", sha1Signature);
      const response = await axios.post(url, formData);
      return response?.data?.secure_url;
    } catch (err) {
      return false;
    }
  };
  async function handleSubmit(values: StaticData): Promise<void> {
    setSubmitLoading(true);
    try {
      values.homeBackground = (values?.homeBackground[0] as any)?.originFileObj
        ? (await uploadImages(values.homeBackground as UploadFile[]))[0]
        : (values?.homeBackground[0] as any)?.url;
      values.homeBackgroundMobile = (values?.homeBackgroundMobile[0] as any)?.originFileObj
        ? (await uploadImages(values.homeBackgroundMobile as UploadFile[]))[0]
        : (values?.homeBackgroundMobile[0] as any)?.url;
      if ((values.videoIntroduce[0] as any).originFileObj) {
        const type = (values.videoIntroduce[0] as any).originFileObj.type.startsWith("video")
          ? "video"
          : "image";
        if (type == "image") {
          const url = (await uploadImages(values.videoIntroduce as UploadFile[]))[0];
          values.videoIntroduce = {
            url,
            type: "image",
          };
        } else {
          const url = await uploadVideo((values.videoIntroduce[0] as any).originFileObj);
          if (!url) {
            message.error("upload video lỗi");
            return;
          } else {
            values.videoIntroduce = {
              url,
              type: "video",
            };
          }
        }
      } else {
        values.videoIntroduce = {
          url: (values?.videoIntroduce[0] as any)?.url,
          type: (values?.videoIntroduce[0] as any)?.name == "video.mp4" ? "video" : "image",
        };
      }
      await setStatic(values);
      message.success("Lưu thành công");
    } catch (error) {
      message.error(error);
    }
    setSubmitLoading(false);
  }
  const [form] = Form.useForm();

  if (loading) return <SpinLoading />;
  return (
    <Form
      initialValues={data}
      className="w-full h-full"
      layout="horizontal"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 14 }}
      onFinish={handleSubmit}
      form={form}
    >
      <Layout className="h-full">
        <Layout.Content>
          <FormUploadImages name="homeBackground" label="Ảnh trang home:" singleOnly />
          <FormUploadImages name="homeBackgroundMobile" label="Ảnh trang home trên mobile:" singleOnly />
          <FormUpload
            name="videoIntroduce"
            label="Video hoặc ảnh phần giới thiệu:"
            data={data?.videoIntroduce}
            singleOnly
          />
        </Layout.Content>
        <Layout.Footer className="bg-transparent flex justify-end">
          <Button className="w-40 mr-3" onClick={() => window.location.reload()}>
            Hoàn tác
          </Button>
          <Button htmlType="submit" type="primary" className="w-40" loading={submitLoading}>
            Lưu thay đổi
          </Button>
        </Layout.Footer>
      </Layout>
    </Form>
  );
}
