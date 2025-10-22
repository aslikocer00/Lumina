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
        primary: "#111827",
        secondary: "#f9fafb",
        accent: "#ef6ba2",
        soft: "#f3f4f6"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"]
      },
      backgroundImage: {
        "soft-gradient":
          "radial-gradient(circle at top left, rgba(239,107,162,0.25), transparent 60%), radial-gradient(circle at bottom right, rgba(59,130,246,0.2), transparent 55%)"
      }
    }
  },
  plugins: []
};

export default config;
