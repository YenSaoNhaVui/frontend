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
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_BACKEND_URL}/blogs/${params?.slug}`
    );
    const posts: Blog = response?.data;

    return {
      title: posts.title,
      description: posts.description,
      openGraph: {
        title: posts.title,
        description: posts.description,
        type: "article",
        url: `${process.env.NEXT_PUBLIC_BASE_BACKEND_URL}/blogs/${params?.slug}`,
        images: [
          {
            url: "https://a-static.besthdwallpaper.com/spirit-blossom-akali-league-of-legends-lol-wallpaper-2048x1536-103581_26.jpg",
            width: 1200,
            height: 630,
            alt: posts.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: posts.title,
        description: posts.description,
        images: [
          "https://a-static.besthdwallpaper.com/spirit-blossom-akali-league-of-legends-lol-wallpaper-2048x1536-103581_26.jpg",
        ],
      },
    };
  } catch (err) {
    return {
      title: "Not Found",
    };
  }
}
