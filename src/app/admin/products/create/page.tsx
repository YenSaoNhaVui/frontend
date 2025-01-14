"use client";
import { useSearchParamsData } from "@/hooks";
import { Category, type Product } from "@/interfaces";
import { createProduct, updateProduct } from "@/service/products";
import { preprocessImages, uploadImages } from "@/utils";
import { ArrowLeftOutlined } from "@ant-design/icons";
// prettier-ignore
import FormUploadImages from "@/components/form/form-upload-images";
import { App, Button, Form, Input, Layout, UploadFile } from "antd";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import FormCategories from "./form-categories";
import FormWeights from "./form-weights";
const FormDetails = dynamic(() => import("./form-details"), {
  ssr: false,
});
const { Content, Header } = Layout;

export default function Create() {
  const router = useRouter();
  const [form] = Form.useForm();

  const initialProduct = useSearchParamsData<Product>();
  useEffect(() => {
    form.setFieldsValue({
      ...initialProduct,
      images: preprocessImages(initialProduct?.images),
      categories: initialProduct?.categories?.map((item: any) => item.id),
    });
  }, [initialProduct]);

  const { message } = App.useApp();
  const onSubmit = async (product: Product) => {
    setIsSubmited(true);
    try {
      product.images = await uploadImages(product.images as UploadFile[]);
      product.categories = product.categories.map((category: any) => ({ id: category } as Category));
      if (initialProduct) {
        await updateProduct(initialProduct.id, product);
      } else {
        await createProduct(product);
      }
      router.back();
    } catch (err) {
      message.error(err?.response?.data?.message);
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
          <Form.Item<Product> label="Tên" name="title" rules={[{ required: true }]}>
            <Input
              onChange={(e) => {
                const slug = e?.target?.value
                  ?.toLocaleLowerCase()
                  .replaceAll(" ", "-")
                  .split("")
                  .map((char) => map[char] || char)
                  .join("")
                  .replace(/\s+/g, "-")
                  .replaceAll("%", "");
                form.setFieldValue("slug", slug);
              }}
            />
          </Form.Item>

          <Form.Item<Product> label="Slug" name="slug" rules={[{ required: true }]}>
            <Input
              onChange={(e) => {
                const slug = e?.target?.value
                  ?.toLocaleLowerCase()
                  .replaceAll(" ", "-")
                  .split("")
                  .map((char) => map[char] || char)
                  .join("")
                  .replace(/\s+/g, "-")
                  .replaceAll("%", "");
                form.setFieldValue("slug", slug);
              }}
            />
          </Form.Item>

          <Form.Item<Product> label="Loại" name="prices" rules={[{ required: true }]}>
            <FormWeights />
          </Form.Item>
          <Form.Item<Product> label="Mô tả" name="description" rules={[{ required: true }]}>
            <Input.TextArea rows={5} />
          </Form.Item>
          <FormDetails />
          <FormUploadImages<Product> name="images" label="Chọn ảnh" rules={[{ required: true }]} />
        </Content>
      </Layout>
    </Form>
  );
}

const map = {
  á: "a",
  à: "a",
  ả: "a",
  ã: "a",
  ạ: "a",
  ă: "a",
  ắ: "a",
  ằ: "a",
  ẳ: "a",
  ẵ: "a",
  ặ: "a",
  â: "a",
  ấ: "a",
  ầ: "a",
  ẩ: "a",
  ẫ: "a",
  ậ: "a",
  é: "e",
  è: "e",
  ẻ: "e",
  ẽ: "e",
  ẹ: "e",
  ê: "e",
  ế: "e",
  ề: "e",
  ể: "e",
  ễ: "e",
  ệ: "e",
  í: "i",
  ì: "i",
  ỉ: "i",
  ĩ: "i",
  ị: "i",
  ó: "o",
  ò: "o",
  ỏ: "o",
  õ: "o",
  ọ: "o",
  ô: "o",
  ố: "o",
  ồ: "o",
  ổ: "o",
  ỗ: "o",
  ộ: "o",
  ơ: "o",
  ớ: "o",
  ờ: "o",
  ở: "o",
  ỡ: "o",
  ợ: "o",
  ú: "u",
  ù: "u",
  ủ: "u",
  ũ: "u",
  ụ: "u",
  ư: "u",
  ứ: "u",
  ừ: "u",
  ử: "u",
  ữ: "u",
  ự: "u",
  ý: "y",
  ỳ: "y",
  ỷ: "y",
  ỹ: "y",
  ỵ: "y",
  đ: "d",
  "": " ",
};
