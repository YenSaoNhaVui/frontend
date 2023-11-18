"use client";
import "styles/globals.css";
import "styles/quill.snow.css";
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
    <html lang="en">
      <head />
      <body className="h-full w-full">
        <Layout className="h-full">
          <Layout.Header></Layout.Header>
          <Layout>
            <Sider width={250}>
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                className="h-full"
                items={ITEMS}
              />
            </Sider>
            {children}
          </Layout>
        </Layout>
      </body>
    </html>
  );
}
