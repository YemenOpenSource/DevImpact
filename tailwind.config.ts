import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(210 24% 90%)",
        input: "hsl(210 24% 90%)",
        ring: "#3B82F6",
        background: "hsl(0 0% 100%)",
        foreground: "hsl(222 47% 11%)",
        muted: {
          DEFAULT: "hsl(210 20% 96%)",
          foreground: "hsl(215 16% 47%)",
        },
        card: {
          DEFAULT: "hsl(0 0% 100%)",
          foreground: "hsl(222 47% 11%)",
        },
        primary: {
          DEFAULT: "#3B82F6",
          foreground: "#F8FBFF",
        },
        secondary: {
          DEFAULT: "#22D3EE",
          foreground: "#F8FBFF",
        },
        accent: {
          DEFAULT: "#0EA5E9",
          foreground: "#F8FBFF",
        },
        destructive: {
          DEFAULT: "hsl(0 84% 60%)",
          foreground: "hsl(210 40% 98%)",
        },
      },
      boxShadow: {
        card: "0 15px 45px rgba(15, 23, 42, 0.08)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.25s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
