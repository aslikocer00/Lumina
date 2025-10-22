import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1f2933",
        secondary: "#f8f5f0",
        accent: "#b8d8ba",
        soft: "#eef2ea",
        sand: "#e8ded1",
        stone: "#c8c2b8"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"]
      },
      backgroundImage: {
        "soft-gradient":
          "radial-gradient(circle at 20% 20%, rgba(184,216,186,0.22), transparent 60%), radial-gradient(circle at 80% 30%, rgba(232,222,209,0.35), transparent 55%), linear-gradient(135deg, #f8f5f0 0%, #eef2ea 100%)"
      },
      boxShadow: {
        lift: "0 20px 40px -28px rgba(31,41,33,0.35)"
      }
    }
  },
  plugins: []
};

export default config;
