"use client";
import FormReactQuill from "@/components/form/form-react-quill";
import FormUploadImages from "@/components/form/form-upload-images";
import { useSearchParamsData } from "@/hooks";
import { type Blog } from "@/interfaces";
import { createBlog, updateBlog } from "@/service";
import { preprocessImages, uploadImages } from "@/utils";
import { ArrowLeftOutlined } from "@ant-design/icons";
// prettier-ignore
import { App, Button, Form, Input, Layout, UploadFile } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const { Content, Header } = Layout;

export default function Create() {
  const router = useRouter();
  const [form] = Form.useForm();

  const initialBlog = useSearchParamsData<Blog>();
  useEffect(() => {
    form.setFieldsValue({
      ...initialBlog,
      thumbnail: preprocessImages([initialBlog?.thumbnail] as string[]),
    });
  }, [initialBlog]);

  const { message } = App.useApp();
  const onSubmit = async (blog: Blog) => {
    setIsSubmited(true);

    blog.thumbnail = (await uploadImages(blog.thumbnail as UploadFile[]))[0];
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
          <Form.Item<Blog>>
            <Input />
          </Form.Item>

          <Form.Item<Blog>>
            <Input.TextArea rows={5} />
          </Form.Item>
          <FormUploadImages singleOnly label="Ảnh" name="thumbnail" rules={[{ required: true }]} />
          <Form.Item<Blog>>
            <FormReactQuill />
          </Form.Item>
        </Content>
      </Layout>
    </Form>
  );
}
