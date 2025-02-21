import { createUsers } from "@/service";
import { Form, Input, message, Modal, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import Password from "antd/es/input/Password";
import { Dispatch, SetStateAction, useState } from "react";

export default function ModalCreateStaff({
  openModalCreateStaff,
  setOpenModalCreateStaff,
  setUsers,
}: {
  openModalCreateStaff: boolean;
  setOpenModalCreateStaff: Dispatch<SetStateAction<boolean>>;
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
    const data = await createUsers({ ...e, role: !e?.role ? "Staff" : e?.role });
    if (!data) {
      message.error("Nhân viên đã tồn tại");
    } else {
      form.resetFields();
      setUsers(data?.users);
      setOpenModalCreateStaff(false);
    }
    setIsLoading(false);
  };
  const [form] = useForm();
  return (
    <Modal
      onCancel={() => setOpenModalCreateStaff(false)}
      open={openModalCreateStaff}
      centered
      onOk={() => form.submit()}
      confirmLoading={isLoading}
    >
      <div>
        <h6>Tạo nhân viên</h6>
        <Form onFinish={onFinish} form={form} className="mt-6" layout="vertical">
          <Form.Item label="Tên đăng nhập" name="userName">
            <Input name="userName" />
          </Form.Item>
          <Form.Item label="Mật khẩu" name="password">
            <Password name="password" />
          </Form.Item>
          <Form.Item label="Role" name="role">
            <Select
              options={[
                { value: "Owner", label: "Owner" },
                { value: "Staff", label: "Staff" },
              ]}
              defaultValue="Staff"
            />
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
}
