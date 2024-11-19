import { Product, StaticData } from "@/interfaces";
import HomeClient from "@/layout/home-layout";

export default async function Home() {
  const data = await getData();
  const products = await getProductsTop();
  return <HomeClient data={data} products={products} />;
}

async function getData() {
  const res = await fetch("https://new-be-1.onrender.com/static", {
    next: { revalidate: 300 },
  });
  const data: StaticData = await res.json();
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return data;
}

async function getProductsTop() {
  const res = await fetch("https://new-be-1.onrender.com/products/highlights", {
    next: { revalidate: 300 },
  });
  const data: Product[] = await res.json();
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return data;
}
