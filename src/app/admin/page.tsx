"use client";

import { logIn } from "@/service";
import { useUser } from "@/zustand";
import { App, Button, Card, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useStore } from "zustand";

type FormData = {
  userName: string;
  password: string;
};

export default function AdminPage() {
  const { message } = App.useApp();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setUser } = useStore(useUser);
  const router = useRouter();
  async function handleSubmit(e: FormData) {
    setIsLoading(true);
    try {
      const data = await logIn(e.userName, e.password);
      setUser(data.user);
      router.replace("/admin/products");
    } catch (error) {
      message.error("Tài khoản không đúng!");
    }
    setIsLoading(false);
  }
  return (
    <main className="flex justify-center items-center h-full w-screen">
      <Card>
        <Form onFinish={handleSubmit} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
          <h4 className="text-center mb-8">Đăng nhập</h4>
          <Form.Item<FormData> label="Tên tài khoản:" name="userName">
            <Input placeholder="admin" />
          </Form.Item>
          <Form.Item<FormData> label="Mật khẩu:" name="password">
            <Input.Password placeholder="admin" />
          </Form.Item>
          <Button
            loading={isLoading}
            aria-label="login/Đăng nhập button"
            title="login/Đăng nhập"
            htmlType="submit"
            type="primary"
            className="block ml-auto"
          >
            Đăng nhập
          </Button>
        </Form>
      </Card>
    </main>
  );
}
