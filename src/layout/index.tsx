"use client";
import { ReactNode, useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import { App } from "antd";
import { useStatic } from "@/zustand";
// import TopNavigation from "./top-navigation";
// import { SidebarProvider } from "@/context/SidebarContext";
// import SideBar from "./side-bar";
// import { MusicProvider } from "@/context/music-context";

export default function Layout({ children }: { children: ReactNode }) {
  const init = useStatic((s) => s.initStaticData);
  useEffect(() => {
    init();
  }, []);
  return (
    <App>
      <Header />
      <main className="">
        {/* max-w-[1536px] 2xl:mx-auto lg:mx-8 md:mx-6 mx-4 bg */}
        {children}
      </main>
      <Footer />
    </App>
  );
}
