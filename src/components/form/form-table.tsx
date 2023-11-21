// import { useState } from "react";
//
// type Props = {
//   value?: string;
//   onChange?: (value: string) => void;
// };
//
// function FormTable({ value: defaultValue, onChange }: Props) {
//   const [value, setValue] = useState<string>();
//
//   function handleChange(v: string): void {
//     setValue(v);
//     onChange?.(v);
//   }
//
//   let columns =
//   return <div>FormTable</div>;
// }
//
// export default FormTable;
//
import React, { useState } from "react";
import { Table, Input, InputNumber, Popconfirm, Form, Button, Space } from "antd";

interface EditableCellProps {
  editing: boolean;
  dataIndex: string;
  title: string;
  inputType: "text" | "number";
  record: any;
  index: number;
  children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
}) => {
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
  return (
    <td>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

interface Column {
  title: string;
  dataIndex: string;
  editable: boolean;
}

interface RowData {
  key: string;
  [key: string]: any;
}

const EditableTable: React.FC = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState<RowData[]>([
    {
      key: "1",
      name: "John Doe",
      age: 25,
      address: "123 Main St",
    },
    {
      key: "2",
      name: "Jane Doe",
      age: 30,
      address: "456 Oak St",
    },
  ]);
  const [editingKey, setEditingKey] = useState("");

  const isEditing = (record: RowData) => record.key === editingKey;

  const edit = (record: RowData) => {
    form.setFieldsValue({
      name: "",
      age: "",
      address: "",
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (key: string) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const addColumn = () => {
    const newData = [...data];
    const newColumn: Column = {
      title: `Column ${data.length + 1}`,
      dataIndex: `column${data.length + 1}`,
      editable: true,
    };
    newData.forEach((item) => {
      item[newColumn.dataIndex] = "";
    });
    setData(newData);
  };

  const addRow = () => {
    const newData = [...data];
    const newRow: RowData = {
      key: (data.length + 1).toString(),
    };
    newData.forEach((item) => {
      newRow[item.dataIndex] = "";
    });
    newData.push(newRow);
    setData(newData);
  };

  const deleteColumn = (dataIndex: string) => {
    const newData = data.map((item) => {
      const newItem = { ...item };
      delete newItem[dataIndex];
      return newItem;
    });
    setData(newData);
  };

  const deleteRow = (key: string) => {
    const newData = data.filter((item) => item.key !== key);
    setData(newData);
  };

  const columns: (Column | any)[] = [
    ...data.map((column) => ({
      title: column.title,
      dataIndex: column.dataIndex,
      editable: true,
    })),
    {
      title: "Action",
      dataIndex: "action",
      render: (_: any, record: RowData) => {
        const editable = isEditing(record);
        return editable ? (
          <Space>
            <Button type="primary" onClick={() => save(record.key)}>
              Save
            </Button>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <Button>Cancel</Button>
            </Popconfirm>
          </Space>
        ) : (
          <Space>
            <Button disabled={editingKey !== ""} onClick={() => edit(record)}>
              Edit
            </Button>
            <Popconfirm title="Sure to delete?" onConfirm={() => deleteRow(record.key)}>
              <Button>Delete</Button>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record: RowData) => ({
        record,
        inputType: col.dataIndex === "age" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <div>
      <Button onClick={addColumn} style={{ marginBottom: 16 }}>
        Add Column
      </Button>
      <Button onClick={addRow} style={{ marginBottom: 16, marginLeft: 16 }}>
        Add Row
      </Button>
      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          dataSource={data}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={false}
        />
      </Form>
    </div>
  );
};

export default EditableTable;
