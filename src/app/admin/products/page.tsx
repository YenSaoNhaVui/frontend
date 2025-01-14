"use client";
import useAsync from "@/hooks/use-async";
import { copyProduct, getProductsAll, updateHidden, updateHighlight } from "@/service";
import { Product } from "@/interfaces";
import { deleteProduct } from "@/service/products/delete-product";
import { buildQueryString, formatPrice } from "@/utils";
import { DeleteOutlined, EditOutlined, EyeOutlined, HighlightOutlined } from "@ant-design/icons";
import { App, Button, Image, Layout, Space, Table, Tooltip } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

const { Column } = Table;
const { Content, Header } = Layout;

export default function AdminProductsPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);
  const { data, loading, refetch } = useAsync<Product[]>(() => getProductsAll({ take: 999999 }));
  const { message } = App.useApp();
  const router = useRouter();

  const handleUpdateHighlight = async (id: number, highlight: boolean) => {
    try {
      setProducts((prev) => prev.map((item) => (item.id == id ? { ...item, highlight } : item)));
      await updateHighlight(id, highlight);
    } catch {
      setProducts((prev) =>
        prev.map((item) => (item.id == id ? { ...item, highlight: !highlight } : item))
      );
      message.error("Lỗi xảy ra");
    }
  };

  const handleCopy = async (id: number) => {
    setIsLoading(true);
    const { data, status } = await copyProduct(id);
    setIsLoading(false);
    if (status == 201) {
      setProducts((prev) => [data, ...prev]);
      message.success("Sao chép sản phẩm thành công");
    } else {
      message.error("Sao chép sản phẩm thất bại");
    }
  };

  const handleHidden = async (id: number, isDisplay: boolean) => {
    try {
      setProducts((prev) => prev.map((item) => (item.id == id ? { ...item, isDisplay } : item)));
      await updateHidden(id, isDisplay);
    } catch {
      setProducts((prev) =>
        prev.map((item) => (item.id == id ? { ...item, isDisplay: !isDisplay } : item))
      );
      message.error("Lỗi xảy ra");
    }
  };

  const handleDeleteProduct = async (id: number) => {
    try {
      await deleteProduct(id);
      refetch();
    } catch {
      message.error("Lỗi xảy ra");
    }
  };

  useEffect(() => {
    setProducts(data);
  }, [data]);

  return (
    <Layout>
      <Header className=" bg-transparent">
        <Button type="primary" onClick={() => router.push("products/create")}>
          Tạo mới
        </Button>
      </Header>
      <Content>
        <Table
          dataSource={products ?? []}
          loading={loading}
          pagination={{ position: ["none", "bottomRight"], pageSize: 10 }}
          className="[&_.ant-table-cell]:!py-3"
        >
          <Column title="STT" key="id" render={(_, __, i) => i + 1} />
          <Column<Product>
            title="Tiêu đề"
            key="title"
            filterSearch={true}
            onFilter={(value, { id }) => value == id}
            filters={data?.map(({ id, title }) => ({ text: title, value: id }))}
            render={(_: any, product: Product) => (
              <Space>
                <Image width={40} src={product.images?.[0] as string} />
                <Link href={"/products/" + product?.slug} className="!text-black" target="_blank">
                  {product.title}
                </Link>
              </Space>
            )}
          />
          <Column
            title="Giá"
            key="price"
            render={(_, product: Product) => formatPrice(product.prices?.[0]?.price ?? 0)}
          />
          {/* <Column */}
          {/*   title="Giá niêm yết" */}
          {/*   key="listPrice" */}
          {/*   render={(_, product: Product) => formatPrice(product.listPrice)} */}
          {/* /> */}

          <Column
            key="action"
            render={(_: any, product: Product) => (
              <Space>
                <Tooltip title="Đánh dấu là sản phẩm nổi bật">
                  <Button
                    shape="circle"
                    icon={<HighlightOutlined />}
                    type={product.highlight ? "primary" : "text"}
                    onClick={() => handleUpdateHighlight(product.id, !product.highlight)}
                  />
                </Tooltip>
                <Tooltip title="Sao chép sản phẩm">
                  <Button
                    shape="circle"
                    icon={<IconCopy />}
                    className="!flex items-center justify-center"
                    loading={isLoading}
                    onClick={() => handleCopy(product.id)}
                  />
                </Tooltip>
                <Tooltip title="Ẩn sản phẩm">
                  <Button
                    shape="circle"
                    icon={product?.isDisplay ? <EyeOutlined /> : <IconEyeSlash />}
                    className="!flex items-center justify-center"
                    onClick={() => handleHidden(product.id, !product.isDisplay)}
                  />
                </Tooltip>
                <Button
                  shape="circle"
                  icon={<DeleteOutlined />}
                  type="text"
                  danger
                  onClick={() => handleDeleteProduct(product.id)}
                />
                <Button
                  shape="circle"
                  icon={<EditOutlined />}
                  onClick={() => router.push(buildQueryString("/admin/products/create", product))}
                ></Button>
              </Space>
            )}
          />
        </Table>
      </Content>
    </Layout>
  );
}

const IconEyeSlash = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" viewBox="0 0 256 256">
      <path d="M53.92,34.62A8,8,0,1,0,42.08,45.38L61.32,66.55C25,88.84,9.38,123.2,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208a127.11,127.11,0,0,0,52.07-10.83l22,24.21a8,8,0,1,0,11.84-10.76Zm47.33,75.84,41.67,45.85a32,32,0,0,1-41.67-45.85ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.16,133.16,0,0,1,25,128c4.69-8.79,19.66-33.39,47.35-49.38l18,19.75a48,48,0,0,0,63.66,70l14.73,16.2A112,112,0,0,1,128,192Zm6-95.43a8,8,0,0,1,3-15.72,48.16,48.16,0,0,1,38.77,42.64,8,8,0,0,1-7.22,8.71,6.39,6.39,0,0,1-.75,0,8,8,0,0,1-8-7.26A32.09,32.09,0,0,0,134,96.57Zm113.28,34.69c-.42.94-10.55,23.37-33.36,43.8a8,8,0,1,1-10.67-11.92A132.77,132.77,0,0,0,231.05,128a133.15,133.15,0,0,0-23.12-30.77C185.67,75.19,158.78,64,128,64a118.37,118.37,0,0,0-19.36,1.57A8,8,0,1,1,106,49.79,134,134,0,0,1,128,48c34.88,0,66.57,13.26,91.66,38.35,18.83,18.83,27.3,37.62,27.65,38.41A8,8,0,0,1,247.31,131.26Z"></path>
    </svg>
  );
};

const IconCopy = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" viewBox="0 0 256 256">
      <path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"></path>
    </svg>
  );
};
