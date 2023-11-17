"use client";
import { FormInputPrice } from "@/components/form/form-input-price";
import FormUploadImages from "@/components/form/form-upload-images";
import { useSearchParamsData } from "@/hooks";
import { type Product } from "@/service/interfaces";
import { createProduct, updateProduct } from "@/service/products";
import { preprocessImages, uploadImages } from "@/utils";
import { ArrowLeftOutlined } from "@ant-design/icons";
import {
  App,
  Button,
  Flex,
  Form,
  Input,
  InputNumber,
  Layout,
  UploadFile,
} from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const { Content, Header } = Layout;

export default function Create() {
  const router = useRouter();
  const [form] = Form.useForm();

  const initialProduct = useSearchParamsData<Product>();
  useEffect(() => {
    initialProduct!.images = preprocessImages(initialProduct?.images);
    form.setFieldsValue(initialProduct);
  }, [initialProduct]);

  const { message } = App.useApp();
  const onSubmit = async (product: Product) => {
    setIsSubmited(true);
    product.images = await uploadImages(product.images as UploadFile[]);
    try {
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
    <Layout className="p-8">
      <Header className="flex bg-transparent">
        <Button onClick={() => router.back()}>
          <ArrowLeftOutlined />
        </Button>
      </Header>
      <Content>
        <Form
          validateMessages={{ required: "Vui lòng nhập!" }}
          name="basic"
          onFinish={onSubmit}
          autoComplete="off"
          form={form}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 10 }}
        >
          <Form.Item<Product>
            label="Tên"
            name="title"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Product>
            label="Giá"
            name="price"
            rules={[{ required: true }]}
          >
            <FormInputPrice />
          </Form.Item>

          <Form.Item<Product>
            label="Giá niêm yết"
            name="listPrice"
            rules={[{ required: true }]}
          >
            <FormInputPrice />
          </Form.Item>

          <Form.Item<Product>
            label="Trọng lượng"
            name="weights"
            rules={[{ required: true }]}
          >
            <InputNumber suffix="kg" />
          </Form.Item>
          <Form.Item<Product>
            label="Mô tả"
            name="description"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<Product>
            label="Chi tiết"
            name="details"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <FormUploadImages<Product>
            name="images"
            label="Chọn ảnh"
            rules={[{ required: true }]}
          />
          <Form.Item>
            <Flex gap="middle" justify="end">
              <Button onClick={() => form.resetFields()}>Làm mới</Button>
              <Button type="primary" htmlType="submit" loading={isSubmitted}>
                OK
              </Button>
            </Flex>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
}
