import { StaticData } from "@/interfaces";
import HomeClient from "@/layout/home-layout";

export const revalidate = 1800; // revalidate the data at most every hour

export default async function Home() {
  const data = await getData();
  return <HomeClient data={data} />;
}

async function getData() {
  const res = await fetch("https://be-yensao.onrender.com/static", { cache: "force-cache" });
  const data: StaticData = await res.json();
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return data;
}
