"use client";

import { useStatic } from "@/zustand";
import React from "react";

export default function FirstBackground() {
  const { homeBackground } = useStatic((s) => s.staticData);
  return (
    <div
      className="lg:h-[1084px] lg:pt-0 pt-[100%] relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url("${homeBackground}-/preview/-/quality/smart_retina/-/format/auto/")`,
      }}
    >
      <div
        className="absolute top-1 left-0 w-full lg:h-full h-[calc(100%-80px)] z-[20]"
        style={{
          background: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 73.44%, #000 100%)",
        }}
      />
    </div>
  );
}
