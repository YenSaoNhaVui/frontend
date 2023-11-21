"use client";
import { FormInputPrice } from "@/components/form/form-input-price";
import FormUploadImages from "@/components/form/form-upload-images";
import { useSearchParamsData } from "@/hooks";
import { Category, type Product } from "@/interfaces";
import { createProduct, updateProduct } from "@/service/products";
import { preprocessImages, uploadImages } from "@/utils";
import { ArrowLeftOutlined } from "@ant-design/icons";
// prettier-ignore
import { App, Button, Flex, Form, Input, InputNumber, Layout, UploadFile } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const { Content, Header } = Layout;
import FormCategories from "./form-categories";
import FormReactQuill from "@/components/form/form-react-quill";

export default function Create() {
  const router = useRouter();
  const [form] = Form.useForm();

  const initialProduct = useSearchParamsData<Product>();
  useEffect(() => {
    form.setFieldsValue({
      ...initialProduct,
      images: preprocessImages(initialProduct?.images),
      categories: initialProduct?.categories.map((item: any) => item.id),
    });
  }, [initialProduct]);

  const { message } = App.useApp();
  const onSubmit = async (product: Product) => {
    setIsSubmited(true);
    try {
      product.images = await uploadImages(product.images as UploadFile[]);
      product.categories = product.categories.map((category) => ({ id: category }) as Category);
      if (initialProduct) {
        await updateProduct(initialProduct.id, product);
      } else {
        await createProduct(product);
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
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 10 }}
    >
      <Layout className="h-full">
        <Header className="bg-transparent">
          <Button onClick={() => router.back()}>
            <ArrowLeftOutlined />
          </Button>
        </Header>
        <Content className="overflow-auto pr-8">
          <FormCategories />
          <Form.Item<Product> label="Tên" name="title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item<Product> label="Giá" name="price" rules={[{ required: true }]}>
            <FormInputPrice />
          </Form.Item>

          <Form.Item<Product> label="Giá niêm yết" name="listPrice" rules={[{ required: true }]}>
            <FormInputPrice />
          </Form.Item>

          <Form.Item<Product> label="Trọng lượng" name="weights" rules={[{ required: true }]}>
            <InputNumber suffix="kg" />
          </Form.Item>
          <Form.Item<Product> label="Mô tả" name="description" rules={[{ required: true }]}>
            <Input.TextArea rows={5} />
          </Form.Item>
          <Form.Item<Product> label="Chi tiết" name="details" rules={[{ required: true }]}>
            <FormReactQuill />
          </Form.Item>
          <FormUploadImages<Product> name="images" label="Chọn ảnh" rules={[{ required: true }]} />
        </Content>
        <Layout.Footer>
          <Flex gap="middle" justify="end">
            {!initialProduct && <Button onClick={() => form.resetFields()}>Làm mới</Button>}
            <Button type="primary" htmlType="submit" loading={isSubmitted}>
              OK
            </Button>
          </Flex>
        </Layout.Footer>
      </Layout>
    </Form>
  );
}
