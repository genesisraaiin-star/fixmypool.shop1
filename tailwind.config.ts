import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eff4ff",
          100: "#dbe6ff",
          200: "#b8cfff",
          300: "#8fb1ff",
          400: "#5f88ff",
          500: "#3266f0",
          600: "#244bd1",
          700: "#1d3ba5",
          800: "#1c3382",
          900: "#1c2f6a",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
