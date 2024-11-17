"use client";
import Editor from "@/components/editor";
import useAsync from "@/hooks/use-async";
import { Question } from "@/interfaces";
import { deleteQuestion, getQuestions, viewedQuestion } from "@/service/questions";
import { formatDate } from "@/utils";
import { DeleteOutlined, EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { App, Button, Popconfirm, Space, Table, Tooltip } from "antd";
import Column from "antd/es/table/Column";

export default function AdminQuestionsPage() {
  const { data, loading, refetch } = useAsync<Question[]>(() => getQuestions());
  const { message } = App.useApp();
  const handleDeleteQuestion = async (id: number) => {
    try {
      await deleteQuestion(id);
      refetch();
    } catch {
      message.error("Lỗi xảy ra");
    }
  };

  async function handleViewed(id: number, viewed: boolean): Promise<void> {
    try {
      await viewedQuestion(id, viewed);
      refetch();
    } catch {
      message.error("Lỗi xảy ra");
    }
  }

  return (
    <Table<Question>
      rowClassName={({ viewed }) => (viewed ? "bg-gray-200" : "")}
      expandable={{
        expandedRowRender: (record) => <Editor value={record.details} isReadOnly />,
      }}
      dataSource={data?.sort((a, b) => (a.viewed === b.viewed ? 0 : a.viewed ? 1 : -1)) ?? []}
      loading={loading}
      pagination={{ position: ["none", "bottomRight"], pageSize: 12 }}
      className="w-full h-full overflow-auto "
    >
      <Column title="STT" key="id" render={(_, __, i) => i + 1} align="center" />
      <Column<Question>
        title="Tên"
        key="name"
        render={(_, { name, identity }) => name + " - " + identity}
      />
      {/* <Column */}
      {/*   title="Nhận xét" */}
      {/*   key="details" */}
      {/*   dataIndex="details" */}
      {/*   render={(value) => <Editor value={value} isReadOnly />} */}
      {/* /> */}
      <Column title="Ngày" key="date" dataIndex="createdAt" render={(value) => formatDate(value)} />
      <Column
        key="action"
        render={(_: any, question: Question) => (
          <Space>
            <Tooltip title={question.viewed ? "Đánh dấu chưa xem" : "Đánh dấu đã xem"}>
              <Button
                shape="circle"
                icon={question.viewed ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                type="text"
                onClick={() => handleViewed(question.id, !question.viewed)}
              />
            </Tooltip>
            <Popconfirm title="Chắc chắn muốn xóa?" onConfirm={() => handleDeleteQuestion(question.id)}>
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
