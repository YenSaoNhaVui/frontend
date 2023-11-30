import { Blog, Product } from "@/interfaces";
import { getProducts } from "@/service";
import axios from "axios";
import { Metadata } from "next";
import ProductDetailsClient from "./product-details-client";

interface DocPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogDetailsPage({ params }: DocPageProps) {
  return <ProductDetailsClient slug={params?.slug} />;
}

export async function generateStaticParams(): Promise<DocPageProps["params"][]> {
  try {
    const response = await getProducts({ take: 99999999 });
    const paths = response?.map((product: Product) => ({
      slug: product?.id?.toString(),
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
      `${process.env.NEXT_PUBLIC_BASE_BACKEND_URL}products/${params?.slug}`
    );
    const product: Product = response?.data;

    return {
      title: product.title,
      description: product.description,
      openGraph: {
        title: product.title,
        description: product.description,
        type: "article",
        url: `${process.env.NEXT_PUBLIC_BASE_BACKEND_URL}/products/${params?.slug}`,
        images: [
          {
            url: product?.images[0] as string,
            width: 1200,
            height: 630,
            alt: product.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: product.title,
        description: product.description,
        images: [product?.images[0] as string],
      },
    };
  } catch (err) {
    return {
      title: "Not Found",
    };
  }
}
