import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        "spin-slow-reverse": "spin 10s linear infinite reverse",
      },
      colors: {
        custom: {
          yellow: "#FBB83B",
          black: {
            primary: "#020617",
            secondary: "#111827",
          },
          blue: {
            primary: "#111827",
            secondary: "#1F2937",
          },
          red: {
            primary: "#BD1C1C",
          },
          primary: "#2463eb",
          secondary: "#c6c6c6",
          danger: "#e3342f",
          success: "#38c172",
          warning: "#fbb83b",
          white: "#ffffff",
          default: "#000000",
        },
      },
    },
  },
  plugins: [],
};
export default config;
