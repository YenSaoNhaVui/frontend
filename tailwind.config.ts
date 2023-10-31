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
        "primary-2-p2": "#004C4D",
        "primary-2-p5": "#FFCE00",
        "primary-2-p6": "#FAD743",

        container: "#1E1E1E",

        "secondary-s5": "#59E2B7",

        "neutral-n5": "#BFBFBF",
        "neutral-n6": "#8C8C8C",
        "neutral-n7": "#595959",

        footer: "#D8AA34",
      },
      fontSize: {
        "headline-1": ["24px", "32px"],
        "headline-2": ["22px", "30px"],
        "headline-3": ["20px", "28px"],
        "headline-42": ["42px", "50px"],
        "body-16": ["16px", "24px"],
        "body-14": ["14px", "22px"],
        "body-13": ["13px", "21px"],
        "body-12": ["12px", "20px"],
        "body-11": ["11px", "19px"],
        "body-10": ["10px", "18px"],
        button: ["14px", "22px"],
      },
      fontFamily: {
        header: ["Poppins", "sans-serif"],
        default: ["Inter"],
      },
    },
  },
  plugins: [],
};
export default config;
