import { Product } from "@/interfaces";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Form } from "antd";
import { Details } from "./details";

type Props = {};

export default function FormDetails({}: Props) {
  return (
    <Form.Item<Product>>
      <Form.List name="details">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name }) => (
              <Details key={key} name={name} remove={remove} />
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />} />
            </Form.Item>
          </>
        )}
      </Form.List>
    </Form.Item>
  );
}
