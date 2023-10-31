"use client";
import { useClient } from "@/hooks";
import ModulesAbout from "@/modules/about";

export default function AboutPage() {
  const { isClient } = useClient();
  return <div>{isClient ? <ModulesAbout /> : "123"}</div>;
}
