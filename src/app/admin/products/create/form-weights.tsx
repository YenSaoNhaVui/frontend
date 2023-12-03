import { FormInputPrice } from "@/components/form/form-input-price";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Space } from "antd";
type Props = {};

export default function FormWeights({ ...props }: Props) {
  return (
    <Form.List {...props} name="prices">
      {(fields, { add, remove }) => (
        <>
          {fields.map((field) => (
            <Space key={field.key} align="baseline" className="flex">
              <Space direction="vertical">
                <Form.Item
                  label="Trọng lượng"
                  rules={[{ required: true }]}
                  name={[field.name, "weight"]}
                >
                  <Input className="!w-full" />
                </Form.Item>

                <Space>
                  <Form.Item label="Giá" name={[field.name, "price"]} rules={[{ required: true }]}>
                    <FormInputPrice />
                  </Form.Item>

                  <Form.Item
                    label="Giá niêm yết"
                    name={[field.name, "listPrice"]}
                    rules={[{ required: true }]}
                  >
                    <FormInputPrice />
                  </Form.Item>
                </Space>
              </Space>
              <MinusCircleOutlined onClick={() => remove(field.name)} />
            </Space>
          ))}

          <Button type="dashed" onClick={() => add()} icon={<PlusOutlined />} className="!w-32" />
        </>
      )}
    </Form.List>
  );
}
