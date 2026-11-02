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
        sand: {
          50: "#FCFBF9",
          100: "#F9F6F0",
          200: "#F3EFEA",
          300: "#E8E0D5",
          400: "#D7CABE",
          500: "#B8A796",
        },
        sage: {
          50: "#F4F7F5",
          100: "#E3EBE7",
          200: "#C6D8CE",
          300: "#9FBDAE",
          400: "#6F9B87",
          500: "#4D7C66",
          600: "#3D6352",
          700: "#325042",
          800: "#273E34",
          900: "#1E3028",
        },
        terracotta: {
          50: "#FBF5F2",
          100: "#F6E8E2",
          200: "#EDD2C5",
          300: "#DFB39F",
          400: "#CE8E71",
          500: "#BD6E4A",
          600: "#A85A37",
          700: "#89472B",
          800: "#6D3924",
          900: "#552E1E",
        },
        earth: {
          50: "#F7F6F5",
          100: "#ECEAE7",
          200: "#D9D5D0",
          300: "#BBB4AC",
          400: "#988E84",
          500: "#7A7066",
          600: "#60574F",
          700: "#4B443E",
          800: "#37322E",
          900: "#24211E",
          950: "#171513",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

