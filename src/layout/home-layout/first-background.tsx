"use client";

import { useStatic } from "@/zustand";
import Link from "next/link";
import React from "react";

export default function FirstBackground() {
  const { homeBackground, homeBackgroundMobile } = useStatic((s) => s.staticData);
  return (
    <Link href="https://yensaonhavui.vn/collections/" target="_blank">
      <div
        className="lg:h-[750px] sm:h-[540px] h-[315px] lg:hidden block relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("${homeBackgroundMobile}-/preview/-/quality/smart_retina/-/format/auto/")`,
        }}
      >
        <div
          className="absolute top-1 left-0 w-full h-[calc(100%-80px)] z-[20]"
          style={{
            background: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 73.44%, #000 100%)",
          }}
        />
      </div>
      <div
        className="lg:h-[750px] sm:h-[540px] h-[315px] hidden lg:block relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("${homeBackground}-/preview/-/quality/smart_retina/-/format/auto/")`,
        }}
      >
        <div
          className="absolute top-1 left-0 w-full h-[calc(100%-80px)] z-[20]"
          style={{
            background: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 73.44%, #000 100%)",
          }}
        />
      </div>
    </Link>
  );
}
