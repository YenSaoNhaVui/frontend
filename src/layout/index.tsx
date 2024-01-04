"use client";
import { useClient } from "@/hooks";
import { useStatic } from "@/zustand";
import { App, Spin } from "antd";
import { ReactNode, useEffect } from "react";
import Footer from "./footer";
import Header from "./header";
// import TopNavigation from "./top-navigation";
// import { SidebarProvider } from "@/context/SidebarContext";
// import SideBar from "./side-bar";
// import { MusicProvider } from "@/context/music-context";

export default function Layout({ children }: { children: ReactNode }) {
  const init = useStatic((s) => s.initStaticData);
  const { isClient } = useClient();
  useEffect(() => {
    init();
  }, []);
  return (
    <App>
      {isClient ? (
        <>
          <Header />
          <main className="">{children}</main>
          <Footer />
        </>
      ) : (
        <main className="w-full h-[500px] flex items-center justify-center">
          <Spin size="large" />
        </main>
      )}
    </App>
  );
}
