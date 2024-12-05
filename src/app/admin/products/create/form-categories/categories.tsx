import { Category } from "@/interfaces";
import { createCategory, deleteCategory, updateCategory } from "@/service/categories";
import {
  PlusOutlined,
  DeleteOutlined,
  EditOutlined,
  CloseCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { App, Button, Form, Input, Popconfirm, Tooltip } from "antd";
import { useForm } from "antd/es/form/Form";
import { Field } from "formik";
import { useEffect, useState } from "react";

type Props = {
  categories: Category[];
  refetch: Function;
};

export default function Categories({ refetch, categories }: Props) {
  const [categoryName, setCategoryName] = useState<string>("");
  const [isEdit, setIsEdit] = useState<number>(-1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { message } = App.useApp();
  const [form] = useForm();
  const handleDeleteCategory = async (id: number) => {
    try {
      await deleteCategory(id);
      refetch();
    } catch (error) {
      console.error(error);
      message.error("Không thể xóa!");
    }
  };
  const handleCreateCategory = async () => {
    try {
      if (categoryName == "" || !categoryName) return;
      await createCategory({ title: categoryName });
      setCategoryName("");
      refetch();
    } catch {}
  };
  const handleUpdateCategory = async (e: any) => {
    if (!e?.name) return;
    setIsLoading(true);
    await updateCategory(isEdit, e?.name || "");
    setIsEdit(-1);
    setIsLoading(false);
    refetch();
  };
  return (
    <div>
      <div className="flex flex-col gap-2">
        {categories.map((category, i) => (
          <div className="flex justify-between items-center gap-2" key={i}>
            {isEdit == category.id ? (
              <Form form={form} onFinish={handleUpdateCategory} className="flex-1">
                <Form.Item name="name" className="!mb-0 w-full">
                  <Input defaultValue={category?.title} />
                </Form.Item>
              </Form>
            ) : (
              <p className="leading-5 h-full align-middle flex-1">{category.title}</p>
            )}
            <div className="flex items-center gap-2">
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
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between gap-4 mt-2">
        <Input value={categoryName} onChange={(e) => setCategoryName(e.target.value)} />
        <Button
          type="primary"
          shape="circle"
          onClick={() => handleCreateCategory()}
          icon={<PlusOutlined />}
        />
      </div>
    </div>
  );
}
