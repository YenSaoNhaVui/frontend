import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, InputNumber, Space } from "antd";
type Props = {};

export default function FormWeights({ ...props }: Props) {
  return (
    <Form.List {...props} name="weights">
      {(fields, { add, remove }) => (
        <>
          {fields.map((field) => (
            <Space key={field.key} align="baseline" className="flex">
              <Form.Item {...field} rules={[{ required: true }]}>
                <InputNumber suffix="kg" />
              </Form.Item>
              <MinusCircleOutlined onClick={() => remove(field.name)} />
            </Space>
          ))}

          <Button type="dashed" onClick={() => add()} icon={<PlusOutlined />} className="!w-32" />
        </>
      )}
    </Form.List>
  );
}
