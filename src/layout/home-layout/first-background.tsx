"use client";

import { StaticData } from "@/interfaces";
import { useStatic } from "@/zustand";
import Link from "next/link";
import React from "react";

export default function FirstBackground({ data }: { data: StaticData }) {
  const { homeBackground, homeBackgroundMobile } = useStatic((s) => s.staticData);
  const bgMobile =
    data?.homeBackgroundMobile || homeBackgroundMobile || data?.homeBackground || homeBackground;
  const bgPc = data?.homeBackground || homeBackground;
  return (
    <Link
      href="https://yensaonhavui.vn/collections/"
      target="_blank"
      className="overflow-hidden max-w-[100vw] block"
    >
      <div className="lg:h-[750px] sm:h-[540px] h-[315px] lg:hidden block relative">
        <img
          loading="eager"
          src={`${bgMobile}/-/quality/lighter/-/format/webp/-/progressive/yes/`}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div
          className="absolute top-1 left-0 w-full h-full z-[20]"
          style={{
            background: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 73.44%, #000 100%)",
          }}
        />
      </div>
      <div className="lg:h-[750px] sm:h-[540px] h-[315px] hidden lg:block relative">
        <img
          loading="eager"
          src={`${bgPc}/-/quality/lighter/-/format/webp/-/progressive/yes/`}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div
          className="absolute top-1 left-0 w-full h-full z-[20]"
          style={{
            background: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 73.44%, #000 100%)",
          }}
        />
      </div>
    </Link>
  );
}
