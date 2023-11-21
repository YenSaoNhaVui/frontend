import { Category } from "@/interfaces";
import { createCategory, deleteCategory } from "@/service/categories";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { App, Button, Input } from "antd";
import { useState } from "react";

type Props = {
  categories: Category[];
  refetch: Function;
};

export default function Categories({ refetch, categories }: Props) {
  const [categoryName, setCategoryName] = useState<string>("");

  const { message } = App.useApp();
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
  return (
    <div>
      {categories.map((category, i) => (
        <div className="flex  justify-between items-center" key={i}>
          <p className="leading-5 h-full align-middle">{category.title}</p>
          <Button
            shape="circle"
            icon={<DeleteOutlined />}
            type="text"
            danger
            onClick={() => handleDeleteCategory(category.id)}
          />
        </div>
      ))}

      <div className="flex justify-between gap-4">
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
