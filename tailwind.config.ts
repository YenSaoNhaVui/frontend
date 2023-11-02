import type { Config } from "tailwindcss";
import { colors } from "./system/color";
import { fontSize } from "./system/text";

const config: Config = {
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
        "home-section-1":
          "url('https://ucarecdn.com/135d2183-9ab1-4ebf-a3a2-cb5f85134190/-/preview/3000x3000/-/quality/smart/-/format/auto/')",
      },
    },
  },
  plugins: [],
};
export default config;
