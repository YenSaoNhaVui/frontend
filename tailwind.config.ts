import type { Config } from "tailwindcss";
import { colors } from "./system/color";
import { fontSize } from "./system/text";

const config: Config = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{html,ts,tsx}",
  ],
  theme: {
    extend: {
      colors,
      fontSize: fontSize as any,
      backgroundImage: {
        "home-section-2":
          "url('https://ucarecdn.com/aa2422ef-e21b-467d-8b7d-090474b590d9/-/preview/-/quality/smart/-/format/auto/')",
        "home-section-3":
          "url('https://ucarecdn.com/2d50294e-63d6-423e-b6c0-7809f7ac6937/-/preview/500x500/-/quality/smart/-/format/auto/')",
      },
      screens: {
        small: "375px",
      },
    },
  },
  plugins: [],
};
export default config;
