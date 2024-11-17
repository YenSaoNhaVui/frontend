import { siteConfig } from "@/config/site";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Sản phẩm",
  description: siteConfig.description,

  robots: "index, follow",
  keywords: "Yến Sào, Yến Sào Nhà Vui, Yến Sào Ngon quám, Yến Sào Bổ, Yến Sào Ngon Bổ Rẻ",
  publisher: "Vercel",
  other: {
    name: "Sản phẩm",
    image: siteConfig?.ogImage,
  },
  authors: [
    {
      name: "Yến sào nhà vui",
      url: "https://yensaonhavui.vn",
    },
  ],
  openGraph: {
    locale: "vi_VN",
    title: "Sản phẩm",
    description: siteConfig.description,
    type: "website",
    url: "https://yensaonhavui.vn",
    images: [
      {
        url: siteConfig?.ogImage,
        width: 1920,
        height: 1024,
        alt: siteConfig.name,
      },
      {
        url: siteConfig?.ogImage,
        width: 1024,
        height: 400,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "yen sao",
    images: [
      {
        url: siteConfig?.ogImage,
        alt: siteConfig.name,
        type: "website",
      },
    ],
  },
  creator: "Yến sào nhà vui",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/`,
};
export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
