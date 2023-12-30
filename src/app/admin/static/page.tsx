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
    data.homeAbout = data.homeAbout ? preprocessImages([data?.homeAbout as string]) : undefined;
    data.homeBackground = data.homeBackground
      ? preprocessImages([data?.homeBackground as string])
      : undefined;
    //
    data.homeBackground1 = data.homeBackground1
      ? preprocessImages([data?.homeBackground1 as string])
      : undefined;
    //
    data.homeBackground2 = data.homeBackground2
      ? preprocessImages([data?.homeBackground2 as string])
      : undefined;
    //
    data.homeBackground3 = data.homeBackground3
      ? preprocessImages([data?.homeBackground3 as string])
      : undefined;
    //
    data.homeBackground4 = data.homeBackground4
      ? preprocessImages([data?.homeBackground4 as string])
      : undefined;
    //
    data.homeBackgroundMobile = data.homeBackgroundMobile
      ? preprocessImages([data?.homeBackgroundMobile as string])
      : undefined;
    data.homeBackgroundMobile1 = data.homeBackgroundMobile1
      ? preprocessImages([data?.homeBackgroundMobile1 as string])
      : undefined;
    data.homeBackgroundMobile2 = data.homeBackgroundMobile2
      ? preprocessImages([data?.homeBackgroundMobile2 as string])
      : undefined;
    data.homeBackgroundMobile3 = data.homeBackgroundMobile3
      ? preprocessImages([data?.homeBackgroundMobile3 as string])
      : undefined;
    data.homeBackgroundMobile4 = data.homeBackgroundMobile4
      ? preprocessImages([data?.homeBackgroundMobile4 as string])
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
    console.log(values);
    try {
      if (values.homeBackground)
        values.homeBackground = (values?.homeBackground[0] as any)?.originFileObj
          ? (await uploadImages(values.homeBackground as UploadFile[]))[0]
          : (values?.homeBackground[0] as any)?.url;
      //
      if (values.homeBackground1)
        values.homeBackground1 = (values?.homeBackground1[0] as any)?.originFileObj
          ? (await uploadImages(values.homeBackground1 as UploadFile[]))[0]
          : (values?.homeBackground1[0] as any)?.url;
      //
      if (values.homeBackground2)
        values.homeBackground2 = (values?.homeBackground2[0] as any)?.originFileObj
          ? (await uploadImages(values.homeBackground2 as UploadFile[]))[0]
          : (values?.homeBackground2[0] as any)?.url;
      //
      if (values.homeBackground3)
        values.homeBackground3 = (values?.homeBackground3[0] as any)?.originFileObj
          ? (await uploadImages(values.homeBackground3 as UploadFile[]))[0]
          : (values?.homeBackground3[0] as any)?.url;
      //
      if (values.homeBackground4)
        values.homeBackground4 = (values?.homeBackground4[0] as any)?.originFileObj
          ? (await uploadImages(values.homeBackground4 as UploadFile[]))[0]
          : (values?.homeBackground4[0] as any)?.url;
      //
      if (values.homeBackgroundMobile)
        values.homeBackgroundMobile = (values?.homeBackgroundMobile[0] as any)?.originFileObj
          ? (await uploadImages(values.homeBackgroundMobile as UploadFile[]))[0]
          : (values?.homeBackgroundMobile[0] as any)?.url;
      //
      if (values.homeBackgroundMobile1)
        values.homeBackgroundMobile1 = (values?.homeBackgroundMobile1[0] as any)?.originFileObj
          ? (await uploadImages(values.homeBackgroundMobile1 as UploadFile[]))[0]
          : (values?.homeBackgroundMobile1[0] as any)?.url;
      //
      if (values.homeBackgroundMobile2)
        values.homeBackgroundMobile2 = (values?.homeBackgroundMobile2[0] as any)?.originFileObj
          ? (await uploadImages(values.homeBackgroundMobile2 as UploadFile[]))[0]
          : (values?.homeBackgroundMobile2[0] as any)?.url;
      //
      if (values.homeBackgroundMobile3)
        values.homeBackgroundMobile3 = (values?.homeBackgroundMobile3[0] as any)?.originFileObj
          ? (await uploadImages(values.homeBackgroundMobile3 as UploadFile[]))[0]
          : (values?.homeBackgroundMobile3[0] as any)?.url;
      //
      if (values.homeBackgroundMobile4)
        values.homeBackgroundMobile4 = (values?.homeBackgroundMobile4[0] as any)?.originFileObj
          ? (await uploadImages(values.homeBackgroundMobile4 as UploadFile[]))[0]
          : (values?.homeBackgroundMobile4[0] as any)?.url;
      //
      values.homeAbout = (values?.homeAbout[0] as any)?.originFileObj
        ? (await uploadImages(values.homeAbout as UploadFile[]))[0]
        : (values?.homeAbout[0] as any)?.url;
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
        <Layout.Content className="max-h-full overflow-scroll">
          <FormUploadImages name="homeBackground" label="Ảnh trang home:" singleOnly />
          <FormUploadImages name="homeBackground1" label="Ảnh trang home: 1" singleOnly />
          <FormUploadImages name="homeBackground2" label="Ảnh trang home: 2" singleOnly />
          <FormUploadImages name="homeBackground3" label="Ảnh trang home: 3" singleOnly />
          <FormUploadImages name="homeBackground4" label="Ảnh trang home: 4" singleOnly />
          <FormUploadImages name="homeBackgroundMobile" label="Ảnh trang home trên mobile:" singleOnly />
          <FormUploadImages name="homeBackgroundMobile1" label="Ảnh trang home: 1" singleOnly />
          <FormUploadImages name="homeBackgroundMobile2" label="Ảnh trang home: 2" singleOnly />
          <FormUploadImages name="homeBackgroundMobile3" label="Ảnh trang home: 3" singleOnly />
          <FormUploadImages name="homeBackgroundMobile4" label="Ảnh trang home: 4" singleOnly />
          <FormUploadImages name="homeAbout" label="Ảnh trang about:" singleOnly />
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
