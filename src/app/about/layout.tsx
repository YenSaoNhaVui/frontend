import Layout from "@/layout";
import "../../../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
