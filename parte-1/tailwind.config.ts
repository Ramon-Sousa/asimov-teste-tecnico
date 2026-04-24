import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#B9FF66",
        dark: "#191A23",
        grey: "#F3F3F3",
        black: "#000000",
        white: "#FFFFFF",
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "sans-serif"],
      },
      fontSize: {
        "h1": ["60px", { lineHeight: "1", fontWeight: "500" }],
        "h1-mob": ["43px", { lineHeight: "1", fontWeight: "500" }],
        "h2": ["40px", { lineHeight: "1", fontWeight: "500" }],
        "h2-mob": ["36px", { lineHeight: "1", fontWeight: "500" }],
        "h3": ["30px", { lineHeight: "1", fontWeight: "500" }],
        "h3-mob": ["26px", { lineHeight: "1", fontWeight: "500" }],
        "h4": ["20px", { lineHeight: "1", fontWeight: "500" }],
        "h4-mob": ["18px", { lineHeight: "1", fontWeight: "500" }],
        "body": ["18px", { lineHeight: "1", fontWeight: "400" }],
        "body-mob": ["16px", { lineHeight: "24px", fontWeight: "400" }],
      },
      borderRadius: {
        "card": "45px",
        "btn": "14px",
        "tag": "7px",
      },
      boxShadow: {
        "card": "0px 5px 0px 0px #191A23",
      },
      spacing: {
        "container-x": "100px",
        "container-x-mob": "20px",
      },
    },
  },
  plugins: [],
};

export default config;
