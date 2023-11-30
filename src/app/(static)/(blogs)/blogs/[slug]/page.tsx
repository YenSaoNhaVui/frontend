import { Blog } from "@/interfaces";
import { getBlogs } from "@/service";
import axios from "axios";
import { Metadata } from "next";
import BlogDetailsClient from "./blog-detail-client";

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
      slug: blog?.id?.toString(),
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
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_BACKEND_URL}blogs/${params?.slug}`);
    const blogs: Blog = response?.data;

    return {
      title: blogs.title,
      description: blogs.description,
      openGraph: {
        title: blogs.title,
        description: blogs.description,
        type: "article",
        url: `${process.env.NEXT_PUBLIC_BASE_BACKEND_URL}/blogs/${params?.slug}`,
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
