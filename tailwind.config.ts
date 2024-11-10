import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily: {
        sans: "var(--font-sans)",
        serif: "var(--font-serif)",
      },
      duration: {
        "10000": "10000ms",
        "5000": "5000ms",
      },
      animation: {
        "ping-large": "ping-large 5s ease-out",
      },
      keyframes: {
        "ping-large": {
          "75%,100%": {
            transform: "scale(3)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
