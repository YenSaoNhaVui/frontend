"use client";
import useAsync from "@/hooks/use-async";
import { Order } from "@/interfaces";
import { deleteOrder, getOrders, viewedOrder } from "@/service";
import { formatDate } from "@/utils";
import { DeleteOutlined, EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { App, Button, Popconfirm, Space, Table, Tooltip } from "antd";
import Column from "antd/es/table/Column";
import RowDetails from "./row-details";

export default function AdminOrdersPage() {
  const { data, loading, refetch } = useAsync<Order[]>(() => getOrders());
  const { message } = App.useApp();
  const handleDeleteOrder = async (id: number) => {
    try {
      await deleteOrder(id);
      refetch();
    } catch {
      message.error("Lỗi xảy ra");
    }
  };

  async function handleViewed(id: number, viewed: boolean): Promise<void> {
    try {
      await viewedOrder(id, viewed);
      refetch();
    } catch {
      message.error("Lỗi xảy ra");
    }
  }

  return (
    <Table<Order>
      rowClassName={({ viewed }) => (viewed ? "bg-gray-200" : "")}
      dataSource={data?.sort((a, b) => (a.viewed === b.viewed ? 0 : a.viewed ? 1 : -1)) ?? []}
      loading={loading}
      pagination={false}
      className="w-full h-full overflow-auto "
      expandable={{
        expandedRowRender: (order) => <RowDetails order={order} />,
      }}
    >
      <Column title="STT" key="id" render={(_, __, i) => i + 1} align="center" />
      <Column<Order>
        title="Khách hàng"
        key="name"
        render={(_, { name, identity }) => name + " - " + identity}
      />
      <Column<Order> title="Giá tiền" key="totalPrice" dataIndex="totalPrice" />
      <Column title="Ngày" key="date" dataIndex="createdAt" render={(value) => formatDate(value)} />
      <Column
        key="action"
        render={(_: any, order: Order) => (
          <Space>
            <Tooltip title={order.viewed ? "Đánh dấu chưa xem" : "Đánh dấu đã xem"}>
              <Button
                shape="circle"
                icon={order.viewed ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                type="text"
                onClick={() => handleViewed(order.id, !order.viewed)}
              />
            </Tooltip>
            <Popconfirm title="Chắc chắn muốn xóa?" onConfirm={() => handleDeleteOrder(order.id)}>
              <Button shape="circle" icon={<DeleteOutlined />} type="text" danger />
            </Popconfirm>
          </Space>
        )}
        onFilter={(value, { viewed }) => value == viewed}
        filters={[
          { value: true, text: "Đã xem" },
          { value: false, text: "Chưa xem" },
        ]}
      />
    </Table>
  );
}
