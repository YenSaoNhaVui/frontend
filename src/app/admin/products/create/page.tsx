"use client";
import { FormInputPrice } from "@/components/form/form-input-price";
import { useSearchParamsData } from "@/hooks";
import { Category, type Product } from "@/interfaces";
import { createProduct, updateProduct } from "@/service/products";
import { preprocessImages, uploadImages } from "@/utils";
import { ArrowLeftOutlined } from "@ant-design/icons";
// prettier-ignore
import { App, Button, Form, Input, Layout, UploadFile } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import FormCategories from "./form-categories";
import dynamic from "next/dynamic";
const FormDetails = dynamic(() => import("./form-details"), {
  ssr: false,
});
import FormWeights from "./form-weights";
const { Content, Header } = Layout;

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
      product.categories = product.categories.map((category: any) => ({ id: category }) as Category);
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
  if (typeof window === "undefined") return <></>;
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
              {!initialProduct && (
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
          <FormCategories />
          <Form.Item<Product>>
            <Input />
          </Form.Item>

          <Form.Item<Product>>
            <FormInputPrice />
          </Form.Item>

          <Form.Item<Product>>
            <FormInputPrice />
          </Form.Item>

          <Form.Item<Product>>
            <FormWeights />
          </Form.Item>
          <Form.Item<Product>>
            <Input.TextArea rows={5} />
          </Form.Item>
          <FormDetails />
          {/* <FormUploadImages<Product> /> */}
        </Content>
      </Layout>
    </Form>
  );
}
