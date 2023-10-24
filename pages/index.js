import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Yến Nhà Vui</title>
        <meta
          name="description"
          content="Yến Nhà Vui - Hương Vị Hoàn Hảo Từ Nguồn Gốc Việt"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <main>Yến Nhà Vui</main>
    </>
  );
}
