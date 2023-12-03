import Layout from "@/layout";
import "styles/globals.css";
import "styles/quill.snow.css";
import { siteConfig } from "@/config/site";

// mỗi page là có một file page và một file layout (file layout dùng để seo và file page là file cho phần client)
export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Yến Sào", "Yến Sào Nhà Vui", "Yến Sào Ngon quá", "Yến Sào Bổ", "Yến Sào Ngon Bổ Rẻ"],
  authors: [
    {
      name: "Yến Sào",
      url: "https://yensaonhavui.vn",
    },
  ],
  creator: "Yến Sào",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </head>
      <head />
      <body className="h-full w-full bg-neutral-2">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
