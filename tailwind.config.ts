import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      container: { center: true, padding: "1rem", screens: { "2xl": "1320px" } },
    },
  },
  plugins: [],
} satisfies Config;
