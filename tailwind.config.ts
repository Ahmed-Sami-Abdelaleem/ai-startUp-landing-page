import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: "class", // Enable class-based dark mode
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scrollbar: ["hidden"],
      colors: {
        light: {
          primary: "#ffffff",
          secondary: "#f0f0f0",
          text: "#000000",
          accent: "#0070f3",
          background: "#ffffff",
        },
        dark: {
          primary: "#000000",
          secondary: "#1a1a1a",
          text: "#F9FAFB",
          accent: "#ff4081",
          background: "#121212",
        },
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        lg: "80px",
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1200px",
      },
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
