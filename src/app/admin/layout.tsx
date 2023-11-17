"use client";
import { UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const { Sider } = Layout;

type Props = {
  children: React.ReactNode;
};
export default function AdminLayout({ children }: Props) {
  const router = useRouter();

  const ITEMS: MenuProps["items"] = [
    {
      key: "/admin/products",
      icon: <UserOutlined />,
      label: "Quản lý yến sào",
      onClick: (e) => router.push(e.key),
    },
    {
      key: "/admin/questions",
      icon: <UserOutlined />,
      label: "Câu hỏi của khách hàng",
      onClick: (e) => router.push(e.key),
    },
  ];
  return (
    <Layout className="mt-20">
      <Sider width={250}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          className="h-full"
          items={ITEMS}
        />
      </Sider>
      {children}
      {/* <Layout></Layout> */}
      {/* <Content className="p-8 h-screen overflow-auto"></Content> */}
    </Layout>
  );
}
