import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Space } from "antd";
import { NamePath } from "antd/es/form/interface";

export default function FormTable({ name }: { name: NamePath }) {
  return (
    <Form.List name={name}>
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
            <Space key={key} className="flex" align="start">
              <Form.Item {...restField} name={[name, "title"]} rules={[{ required: true }]}>
                <Input placeholder="Header" />
              </Form.Item>
              <Form.Item {...restField} name={[name, "content"]} rules={[{ required: true }]}>
                <Input.TextArea placeholder="Mô tả" />
              </Form.Item>
              <MinusCircleOutlined onClick={() => remove(name)} />
            </Space>
          ))}
          <Button type="dashed" onClick={() => add()} icon={<PlusOutlined />}>
            Thêm 1 dòng
          </Button>
        </>
      )}
    </Form.List>
  );
}
