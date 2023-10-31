import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{html,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#204F4F",
        "primary-2": "#FAD743",
        "secondary-s5": "#59E2B7",

        "neutral-n5": "#BFBFBF",
        "neutral-n6": "#8C8C8C",
        "neutral-n7": "#595959",
      },
    },
  },
  plugins: [],
};
export default config;
