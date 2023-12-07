"use client";
import SpinLoading from "@/components/SpinLoading";
import FormUploadImages from "@/components/form/form-upload-images";
import useAsync from "@/hooks/use-async";
import { StaticData } from "@/interfaces";
import { getStatic, setStatic } from "@/service";
import { preprocessImages, uploadImages } from "@/utils";
import { App, Button, Form, Layout, UploadFile } from "antd";
import React, { useState } from "react";

type Props = {};

export default function StaticAdminPage({}: Props) {
  const { message } = App.useApp();
  const { data, loading } = useAsync<StaticData>(async () => {
    const data = await getStatic();
    data.homeBackground = data.homeBackground
      ? preprocessImages([data?.homeBackground as string])
      : undefined;
    return data;
  });
  const [submitLoading, setSubmitLoading] = useState<boolean>(false);
  async function handleSubmit(values: StaticData): Promise<void> {
    setSubmitLoading(true);
    try {
      values.homeBackground = (await uploadImages(values.homeBackground as UploadFile[]))[0];
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
