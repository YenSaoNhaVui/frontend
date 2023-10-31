import Layout from "@/layout";
import "../../styles/globals.css";
import type { Metadata } from "next";
// mỗi page là có một file page và một file layout (file layout dùng để seo và file page là file cho phần client)
export const metadata: Metadata = {
  title: "Home",
  description: "Home",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
