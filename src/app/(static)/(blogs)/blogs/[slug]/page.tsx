import { Blog } from "@/interfaces";
import { getBlogs } from "@/service";
import axios from "axios";
import { Metadata } from "next";
import BlogDetailsClient from "./blog-detail-client";
import { baseURL } from "@/service/axios-instance";

interface DocPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogDetailsPage({ params }: DocPageProps) {
  return <BlogDetailsClient slug={params?.slug} />;
}

export async function generateStaticParams(): Promise<DocPageProps["params"][]> {
  try {
    const response = await getBlogs({ take: 99999999 });
    const paths = response?.map((blog: Blog) => ({
      slug: (blog?.id || 1)?.toString(),
    }));
    return paths;
  } catch (err) {
    return [
      {
        slug: "1",
      },
    ];
  }
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  try {
    const response = await axios.get(`${baseURL}blogs/${params?.slug}`);
    const blogs: Blog = response?.data;
    return {
      title: blogs.title,
      description: `${blogs.description}`,

      robots: "index, follow",
      keywords: "Yến Sào, Yến Sào Nhà Vui, Yến Sào Ngon quám, Yến Sào Bổ, Yến Sào Ngon Bổ Rẻ",
      publisher: "Vercel",
      openGraph: {
        locale: "vi_VN",
        title: blogs.title,
        description: `${blogs.description}`,
        type: "website",
        url: `${baseURL}/blogs/${params?.slug}`,
        images: [
          {
            url:
              typeof blogs?.thumbnail == "string" ? blogs?.thumbnail : (blogs?.thumbnail[0] as string),
            width: 1200,
            height: 630,
            alt: blogs.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: blogs.title,
        description: blogs.description,
        images: [
          typeof blogs?.thumbnail == "string" ? blogs?.thumbnail : (blogs?.thumbnail[0] as string),
        ],
      },
    };
  } catch (err) {
    return {
      title: "Not Found",
    };
  }
}
