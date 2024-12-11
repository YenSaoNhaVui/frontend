import { Category } from "@/interfaces";
import { deleteCategory, updateCategory } from "@/service";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { useSortable } from "@dnd-kit/sortable";
import { Button, Form, Input, message, Popconfirm } from "antd";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";

export default function ItemCategory({ category, refetch }: { category: Category; refetch: Function }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<number>(-1);
  const [form] = useForm();

  const { setNodeRef, transform, transition, listeners, attributes } = useSortable({
    id: category.id,
  });

  const handleUpdateCategory = async (e: any) => {
    if (!e?.name) return;
    setIsLoading(true);
    await updateCategory(isEdit, e?.name || "");
    setIsEdit(-1);
    setIsLoading(false);
    refetch();
  };
  const handleDeleteCategory = async (id: number) => {
    try {
      await deleteCategory(id);
      refetch();
    } catch (error) {
      console.error(error);
      message.error("Không thể xóa!");
    }
  };
  return (
    <div
      ref={setNodeRef}
      style={{
        position: "relative",
        transform: `translate3d(0px, ${transform?.y || 0}px, 0px)`,
        transition,
        zIndex: "500",
      }}
      className="flex justify-between items-center gap-2"
    >
      {isEdit == category.id ? (
        <Form form={form} onFinish={handleUpdateCategory} className="flex-1">
          <Form.Item name="name" className="!mb-0 w-full">
            <Input defaultValue={category?.title} />
          </Form.Item>
        </Form>
      ) : (
        <p className="leading-5 h-full align-middle flex-1">{category.title}</p>
      )}
      <div className="flex items-center gap-1">
        {isEdit == category?.id && (
          <Button
            shape="circle"
            loading={isLoading}
            icon={<CheckCircleOutlined />}
            onClick={() => form && form.submit()}
            type="text"
          />
        )}
        <Button
          onClick={() => setIsEdit(isEdit > -1 ? -1 : category.id)}
          shape="circle"
          icon={isEdit == category.id ? <CloseCircleOutlined /> : <EditOutlined />}
          type="text"
        />
        {isEdit != category?.id && (
          <Popconfirm
            title="Lưu ý không thể khôi phục sau khi xóa"
            onConfirm={() => handleDeleteCategory(category.id)}
          >
            <Button shape="circle" icon={<DeleteOutlined />} type="text" danger />
          </Popconfirm>
        )}
        <Button {...listeners} {...attributes} icon={<DotsSixVerticalIcon />} type="text" />
      </div>
    </div>
  );
}

export function DotsSixVerticalIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256">
      <path
        fill="#000000"
        d="M104,60A12,12,0,1,1,92,48,12,12,0,0,1,104,60Zm60,12a12,12,0,1,0-12-12A12,12,0,0,0,164,72ZM92,116a12,12,0,1,0,12,12A12,12,0,0,0,92,116Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,116ZM92,184a12,12,0,1,0,12,12A12,12,0,0,0,92,184Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,184Z"
      ></path>
    </svg>
  );
}
