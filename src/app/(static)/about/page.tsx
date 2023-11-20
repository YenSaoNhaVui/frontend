"use client";
import { useClient } from "@/hooks";

export default function AboutPage() {
  const { isClient } = useClient();
  return <div className=" h-[1000px]"></div>;
}
