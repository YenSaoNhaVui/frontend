"use client";
import useAsync from "@/hooks/use-async";
import { deleteBlog, getBlogs } from "@/service";
import { Blog } from "@/interfaces";
import { buildQueryString, formatDate, formatPrice } from "@/utils";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { App, Button, Image, Layout, Space, Table } from "antd";
import { useRouter } from "next/navigation";

const { Column } = Table;
const { Content, Header } = Layout;

export default function AdminblogsPage() {
  const { data, loading, refetch } = useAsync<Blog[]>(() => getBlogs());
  const { message } = App.useApp();
  const router = useRouter();

  const handleDeleteblog = async (id: number) => {
    try {
      await deleteBlog(id);
      refetch();
    } catch {
      message.error("Lỗi xảy ra");
    }
  };

  return (
    <Layout>
      <Header className=" bg-transparent">
        <Button type="primary" onClick={() => router.push("blogs/create")}>
          Tạo mới
        </Button>
      </Header>
      <Content>
        <Table
          dataSource={data ?? []}
          loading={loading}
          pagination={{ position: ["none", "bottomRight"], pageSize: 12 }}
        >
          <Column title="STT" key="id" render={(_, __, i) => i + 1} />
          <Column<Blog>
            title="Tiêu đề"
            key="title"
            dataIndex="title"
            filterSearch={true}
            onFilter={(value, { id }) => value == id}
            filters={data?.map(({ id, title }) => ({ text: title, value: id }))}
          />
          <Column title="Mô tả" key="description" dataIndex="description" />
          <Column
            title="Ngày"
            key="createdAt"
            dataIndex="createdAt"
            render={(value) => formatDate(value)}
            width={130}
          />

          <Column<Blog>
            key="action"
            render={(_: any, blog: Blog) => (
              <Space>
                <Button
                  shape="circle"
                  icon={<DeleteOutlined />}
                  type="text"
                  danger
                  onClick={() => handleDeleteblog(blog.id)}
                />
                <Button
                  shape="circle"
                  icon={<EditOutlined />}
                  onClick={() => router.push(buildQueryString("/admin/blogs/create", blog))}
                ></Button>
              </Space>
            )}
          />
        </Table>
      </Content>
    </Layout>
  );
}
