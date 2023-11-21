import FormReactQuill from "@/components/form/form-react-quill";
import FormTable from "@/components/form/form-table";
import { MinusCircleOutlined } from "@ant-design/icons";
import { Button, Form, Input, Radio } from "antd";
import { useState } from "react";

interface Props {
  name: number;
  remove: (index: number | number[]) => void;
}

export function Details({ name, remove }: Props) {
  const [isTable, setIsTable] = useState<boolean>(false);
  return (
    <div className="relative">
      <Radio.Group
        onChange={(e) => setIsTable(e.target.value)}
        value={isTable}
        optionType="button"
        buttonStyle="solid"
        className="mb-2"
      >
        <Radio value={false}>Nội dung</Radio>
        <Radio value={true}>Bảng</Radio>
      </Radio.Group>
      <Form.Item name={[name, "title"]} rules={[{ required: true }]} label="Tên mục">
        <Input />
      </Form.Item>

      <Form.Item
        name={[name, "last"]}
        rules={[{ required: true }]}
        label={isTable ? "Bảng" : "Nội dung"}
      >
        {isTable ? (
          //<FormTable />
          <div>Chưa làm</div>
        ) : (
          <FormReactQuill />
        )}
      </Form.Item>
      <Button
        danger
        type="text"
        shape="circle"
        className="absolute top-1 left-[103%]"
        icon={<MinusCircleOutlined />}
        onClick={() => remove(name)}
      />
    </div>
  );
}
