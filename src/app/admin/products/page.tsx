"use client";
import useAsync from "@/hooks/use-async";
import { getProducts, updateHighlight } from "@/service";
import { Product } from "@/interfaces";
import { deleteProduct } from "@/service/products/delete-product";
import { buildQueryString, formatPrice } from "@/utils";
import { DeleteOutlined, EditOutlined, HighlightOutlined } from "@ant-design/icons";
import { App, Button, Image, Layout, Space, Table, Tooltip } from "antd";
import { useRouter } from "next/navigation";

const { Column } = Table;
const { Content, Header } = Layout;

export default function AdminProductsPage() {
  const { data, loading, refetch } = useAsync<Product[]>(() => getProducts());
  const { message } = App.useApp();
  const router = useRouter();

  const handleUpdateHighlight = async (id: number, highlight: boolean) => {
    try {
      await updateHighlight(id, highlight);
      refetch();
    } catch {
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

  return (
    <Layout>
      <Header className=" bg-transparent">
        <Button type="primary" onClick={() => router.push("products/create")}>
          Tạo mới
        </Button>
      </Header>
      <Content>
        <Table dataSource={data ?? []} loading={loading} pagination={false}>
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
                {product.title}
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
