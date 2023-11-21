"use client";
import { useSearchParamsData } from "@/hooks";
import { type Blog } from "@/interfaces";
import { createBlog, updateBlog } from "@/service";
import { ArrowLeftOutlined } from "@ant-design/icons";
// prettier-ignore
import { App, Button, Form, Input, Layout } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const { Content, Header } = Layout;

export default function Create() {
  const router = useRouter();
  const [form] = Form.useForm();

  const initialBlog = useSearchParamsData<Blog>();
  useEffect(() => {
    form.setFieldsValue(initialBlog);
  }, [initialBlog]);

  const { message } = App.useApp();
  const onSubmit = async (blog: Blog) => {
    setIsSubmited(true);
    try {
      if (initialBlog) {
        await updateBlog(initialBlog.id, blog);
      } else {
        await createBlog(blog);
      }
      router.back();
    } catch {
      message.error("Lỗi xảy ra!");
    }
    setIsSubmited(false);
  };
  const [isSubmitted, setIsSubmited] = useState<boolean>(false);

  return (
    <Form
      className="h-full w-full"
      validateMessages={{ required: "Vui lòng nhập!" }}
      name="basic"
      onFinish={onSubmit}
      autoComplete="off"
      form={form}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 14 }}
    >
      <Layout className="h-full">
        <Header className="bg-transparent">
          <div className="flex h-full items-center w-full justify-between">
            <Button onClick={() => router.back()} icon={<ArrowLeftOutlined />} shape="circle" />
            <div className="flex gap-2">
              {!initialBlog && (
                <Button className="w-36" onClick={() => form.resetFields()}>
                  Làm mới
                </Button>
              )}
              <Button className="w-36" type="primary" htmlType="submit" loading={isSubmitted}>
                OK
              </Button>
            </div>
          </div>
        </Header>
        <Content className="overflow-auto pr-8">
          <Form.Item<Blog> label="Tiêu đề" name="title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item<Blog> label="Mô tả" name="description" rules={[{ required: true }]}>
            <Input.TextArea rows={5} />
          </Form.Item>
          <Form.Item<Blog> label="Chi tiết" name="details" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Content>
      </Layout>
    </Form>
  );
}
