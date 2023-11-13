import Layout from "@/layout";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Products",
  description: "Blogs",
};
export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
