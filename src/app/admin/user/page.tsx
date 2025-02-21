"use client";
import useAsync from "@/hooks/use-async";
import { deleteStaff, getUsers } from "@/service";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Layout, message, Modal, Space, Table } from "antd";
import { useEffect, useState } from "react";
import ModalCreateStaff from "./modal-create-staff";
import ModalUpdateStaff from "./modal-update-staff";

const { Column } = Table;
const { Content, Header } = Layout;

export default function UserPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [openModalCreateStaff, setOpenModalCreateStaff] = useState<boolean>(false);
  const [users, setUsers] = useState<{ userName: string; role: string; id: number }[]>([]);
  const [user, setUser] = useState<{ userName: string; role: string; id: number } | null>();
  const [userDelete, setUserDelete] = useState<{ userName: string; role: string; id: number } | null>();
  const { data, loading } = useAsync<{
    users: { userName: string; role: string; id: number }[];
  }>(() => getUsers());

  const deleteUser = async () => {
    if (!userDelete) return;
    setIsLoading(true);
    const data = await deleteStaff(userDelete.id);
    if (!data) {
      message.error("Xóa nhân viên lỗi");
    } else {
      setUserDelete(null);
      setUsers(data?.users);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setUsers(data?.users);
  }, [data]);

  return (
    <>
      <ModalCreateStaff
        openModalCreateStaff={openModalCreateStaff}
        setOpenModalCreateStaff={setOpenModalCreateStaff}
        setUsers={setUsers}
      />
      {user && <ModalUpdateStaff user={user} setUser={setUser} setUsers={setUsers} />}
      {userDelete && (
        <Modal
          centered
          open={userDelete != null}
          onCancel={() => setUserDelete(null)}
          confirmLoading={isLoading}
          onOk={deleteUser}
        >
          <h6>Xóa nhân viên</h6>
          <p>Bạn có muốn xóa {userDelete.userName} này không?</p>
        </Modal>
      )}
      <Layout>
        <Header className="bg-transparent">
          <Button type="primary" onClick={() => setOpenModalCreateStaff(true)}>
            Tạo nhân viên
          </Button>
        </Header>
        <Content>
          <Table
            dataSource={users ?? []}
            loading={loading}
            pagination={{ position: ["none", "bottomRight"], pageSize: 10 }}
            className="[&_.ant-table-cell]:!py-3"
          >
            <Column title="STT" key="id" render={(_, __, i) => i + 1} />
            <Column<{ userName: string; role: string; id: number }>
              title="Tên đăng nhập"
              key="userName"
              filterSearch={true}
              onFilter={(value, { id }) => value == id}
              filters={users?.map(({ id, userName }) => ({ text: userName, value: id }))}
              render={(_: any, user: { userName: string; role: string; id: number }) => (
                <Space>
                  <p>{user?.userName}</p>
                </Space>
              )}
            />
            <Column
              title="Role"
              key="role"
              render={(_, user: { userName: string; role: string; id: number }) => user?.role}
            />

            <Column
              key="action"
              render={(_: any, user: { userName: string; role: string; id: number }) => (
                <Space>
                  <Button shape="circle" icon={<EditOutlined />} onClick={() => setUser(user)}></Button>
                  <Button
                    shape="circle"
                    icon={<DeleteOutlined />}
                    type="text"
                    danger
                    onClick={() => setUserDelete(user)}
                  />
                </Space>
              )}
            />
          </Table>
        </Content>
      </Layout>
    </>
  );
}
