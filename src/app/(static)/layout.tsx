import Layout from "@/layout";
import "styles/globals.css";
import "styles/quill.snow.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { ZaloIcon } from "@/components/icons";
import Link from "next/link";
import { Metadata } from "next";

// mỗi page là có một file page và một file layout (file layout dùng để seo và file page là file cho phần client)
export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  keywords: "Yến Sào, Yến Sào Nhà Vui, Yến Sào Ngon quám, Yến Sào Bổ, Yến Sào Ngon Bổ Rẻ",
  publisher: "Vercel",
  other: {
    name: siteConfig.name,
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
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    url: "https://yensaonhavui.vn",
    images: [
      {
        url: siteConfig?.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig?.ogImage],
  },
  creator: "Yến sào nhà vui",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <head />
      <body className="h-full w-full bg-neutral-2">
        <Layout>{children}</Layout>
        <div className="fixed z-[1000] lg:bottom-10 lg:right-10 right-4 bottom-4">
          <Link href="https://zalo.me/0908337315" target="_blank">
            <Button
              aria-label="zalo button"
              title="Zalo"
              variant="ghost"
              className="!p-0 hover:!bg-transparent"
            >
              <ZaloIcon />
            </Button>
          </Link>
        </div>
      </body>
    </html>
  );
}
