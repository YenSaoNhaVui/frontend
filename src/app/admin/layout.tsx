"use client";
import { useClient } from "@/hooks";
import { isLoggedIn, logOut } from "@/service";
import {
  FileTextOutlined,
  HomeOutlined,
  LogoutOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  YuqueFilled,
  YuqueOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { App, Button, Layout, Menu } from "antd";
import { redirect, usePathname, useRouter } from "next/navigation";
import React from "react";
import "styles/globals.css";
import "styles/quill.snow.css";

const { Sider } = Layout;

type Props = {
  children: React.ReactNode;
};
export default function AdminLayout({ children }: Props) {
  const router = useRouter();

  const ITEMS: MenuProps["items"] = [
    {
      key: "/admin/orders",
      icon: <ShoppingCartOutlined />,
      label: "Đặt hàng",
      onClick: (e) => router.push(e.key),
    },
    {
      key: "/admin/products",
      icon: <YuqueOutlined />,
      label: "Quản lý yến sào",
      onClick: (e) => router.push(e.key),
    },

    {
      key: "/admin/blogs",
      icon: <FileTextOutlined />,
      label: "Quản lý bài viết",
      onClick: (e) => router.push(e.key),
    },
    {
      key: "/admin/questions",
      icon: <UserOutlined />,
      label: "Câu hỏi của khách hàng",
      onClick: (e) => router.push(e.key),
    },
    {
      key: "/admin/static",
      icon: <HomeOutlined />,
      label: "Điều chỉnh landing-page",
      onClick: (e) => router.push(e.key),
    },
  ];
  const pathname = usePathname();
  const { isClient } = useClient(() => {
    if (!isLoggedIn() && pathname != "/admin") redirect("/admin");
    else if (pathname == "/admin" && isLoggedIn()) redirect("/admin/products");
  });
  return (
    <html lang="en">
      <head />
      <body className="h-full w-full">
        {isClient ? (
          <App className="h-full w-full">
            {!isLoggedIn() ? (
              children
            ) : (
              <Layout className="h-full">
                <Layout.Header className="bg-white items-center flex justify-between">
                  <div className="flex gap-2">
                    <YuqueFilled className="text-xl" />
                    <h5 className="h-6">Admin Yến Sào Nhà Vui</h5>
                  </div>
                  <Button type="text" onClick={() => logOut()} icon={<LogoutOutlined />}>
                    Đăng xuất
                  </Button>
                </Layout.Header>
                <Layout>
                  <Sider width={250}>
                    <Menu
                      mode="inline"
                      defaultSelectedKeys={["/admin/products"]}
                      className="h-full"
                      items={ITEMS}
                    />
                  </Sider>
                  {children}
                </Layout>
              </Layout>
            )}
          </App>
        ) : (
          <></>
        )}
      </body>
    </html>
  );
}
