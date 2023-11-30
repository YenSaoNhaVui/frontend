import useAsync from "@/hooks/use-async";
import { Category, Product } from "@/interfaces";
import { getCategorys } from "@/service/categories";
import { EditOutlined } from "@ant-design/icons";
import { Button, Form, Modal, Select } from "antd";
import { useState } from "react";
import Categories from "./categories";

type Props = {};

export default function FormCategories({}: Props) {
  const { data, loading, refetch } = useAsync<Category[]>(() => getCategorys());
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <Form.Item<Product>
      // name="categories"
      // label="Danh mục:"
      // rules={[{ required: true }]}
      >
        <Select
          mode="multiple"
          allowClear
          loading={loading}
          options={data?.map((item) => ({
            label: item.title,
            value: item.id,
          }))}
        />
      </Form.Item>
      <Button
        className="absolute top-0 right-0"
        shape="circle"
        icon={<EditOutlined />}
        onClick={() => setOpen(true)}
      />
      <Modal
        title="Chỉnh sửa danh mục"
        open={open}
        onCancel={() => setOpen(false)}
        width={250}
        footer={[
          <Button key="submit" type="primary" onClick={() => setOpen(false)}>
            OK
          </Button>,
        ]}
      >
        <Categories categories={data ?? []} refetch={refetch} />
      </Modal>
    </div>
  );
}
