import { createUsers, updateUser } from "@/service";
import { Form, Input, message, Modal, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function ModalUpdateStaff({
  user,
  setUser,
  setUsers,
}: {
  user: {
    userName: string;
    role: string;
    id: number;
  };
  setUser: Dispatch<
    SetStateAction<{
      userName: string;
      role: string;
      id: number;
    }>
  >;
  setUsers: Dispatch<
    SetStateAction<
      {
        userName: string;
        role: string;
        id: number;
      }[]
    >
  >;
}) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const onFinish = async (e: any) => {
    setIsLoading(true);
    const data = await updateUser(e, user.id);
    if (!data) {
      message.error("Cập nhập lỗi");
    } else {
      form.resetFields();
      setUsers(data?.users);
      setUser(null);
    }
    setIsLoading(false);
  };
  const [form] = useForm();
  useEffect(() => {
    if (form) {
      form.setFieldValue("userName", user.userName);
      form.setFieldValue("role", user.role);
    }
  }, []);
  return (
    <Modal
      onCancel={() => setUser(null)}
      open={user != null}
      centered
      onOk={() => form.submit()}
      confirmLoading={isLoading}
    >
      <div>
        <h6>Cập nhập nhân viên</h6>
        <Form onFinish={onFinish} form={form} className="mt-6" layout="vertical">
          <Form.Item label="Tên đăng nhập" name="userName">
            <Input name="userName" />
          </Form.Item>
          <Form.Item label="Role" name="role">
            <Select
              options={[
                { value: "Owner", label: "Owner" },
                { value: "Staff", label: "Staff" },
              ]}
              defaultValue={user.role}
            />
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
}
