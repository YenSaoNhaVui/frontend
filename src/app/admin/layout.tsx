"use client";
import { useClient } from "@/hooks";
import { getMe, isLoggedIn, logOut } from "@/service";
import { useUser } from "@/zustand";
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
import React, { useState } from "react";
import "styles/globals.css";
import "styles/quill.snow.css";
import { useStore } from "zustand";

const { Sider } = Layout;

type Props = {
  children: React.ReactNode;
};
export default function AdminLayout({ children }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();
  const { user, setUser } = useStore(useUser);
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
  const getAuth = async () => {
    const data = await getMe();
    if (!data) {
      router.push("/admin");
    } else {
      setUser(data.user);
    }
    setIsLoading(false);
  };
  const pathname = usePathname();
  const { isClient } = useClient(() => {
    if (isLoggedIn()) {
      getAuth();
    } else {
      setIsLoading(false);
    }
    if (!isLoggedIn() && pathname != "/admin") redirect("/admin");
    else if (pathname == "/admin" && isLoggedIn()) redirect("/admin/products");
  });
  return (
    <html lang="en">
      <head />
      <body className="h-full w-full">
        {isClient && !isLoading ? (
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
                  <Button
                    aria-label="logout/Đăng xuất button"
                    title="logout/Đăng xuất"
                    type="text"
                    onClick={() => logOut()}
                    icon={<LogoutOutlined />}
                  >
                    Đăng xuất
                  </Button>
                </Layout.Header>
                <Layout>
                  <Sider width={250}>
                    <Menu
                      mode="inline"
                      defaultSelectedKeys={[pathname]}
                      className="h-full"
                      items={
                        user?.role?.toLocaleLowerCase() == "owner"
                          ? [
                              ...ITEMS,
                              {
                                key: "/admin/user",
                                icon: <UserOutlined />,
                                label: "Quản lý nhân viên",
                                onClick: (e) => router.push(e.key),
                              },
                            ]
                          : ITEMS
                      }
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
