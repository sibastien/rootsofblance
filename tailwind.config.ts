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
          50: "#FAF8F5",
          100: "#F5F0EA",
          200: "#EFE8DE",
          300: "#E3D8CA",
          400: "#D5C6B4",
          500: "#B6A48F",
          600: "#96836E",
          700: "#756554",
          800: "#55493C",
          900: "#362E25",
        },
        sage: {
          50: "#F4F7F5",
          100: "#E3EBE7",
          200: "#C6D8CE",
          300: "#9FBDAE",
          400: "#6F9B87",
          500: "#4D7561",
          600: "#3D604E",
          700: "#2F4A3C",
          800: "#22352B",
          900: "#18261F",
          950: "#0F1813",
        },
        terracotta: {
          50: "#FBF5F2",
          100: "#F6E8E2",
          200: "#EDD2C5",
          300: "#DFB39F",
          400: "#CE8E71",
          500: "#B86944",
          600: "#9E5230",
          700: "#7F3E22",
          800: "#612D17",
          900: "#451E0E",
        },
        earth: {
          50: "#F8F7F5",
          100: "#EFECE8",
          200: "#DDD8D0",
          300: "#BEB6AB",
          400: "#9E9486",
          500: "#7E7465",
          600: "#635B4E",
          700: "#4B443A",
          800: "#353029",
          900: "#221F1A",
          950: "#151310",
        },
        cream: {
          50: "#FFFEFC",
          100: "#FAF7F0",
          200: "#F4EFE5",
          300: "#EAE2D3",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Cormorant Garamond", "Amiri", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Cairo", "Inter", "system-ui", "-apple-system", "sans-serif"],
        arabicSerif: ["var(--font-arabic-serif)", "Amiri", "serif"],
        arabicSans: ["var(--font-arabic-sans)", "Cairo", "sans-serif"],
      },
      boxShadow: {
        'editorial': '0 20px 40px -15px rgba(24, 38, 31, 0.07)',
        'soft': '0 4px 20px -2px rgba(24, 38, 31, 0.04)',
        'elevated': '0 25px 60px -12px rgba(24, 38, 31, 0.12)',
      },
      animation: {
        'gentle-float': 'gentleFloat 8s ease-in-out infinite alternate',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'subtle-pulse': 'subtlePulse 4s ease-in-out infinite',
      },
      keyframes: {
        gentleFloat: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        subtlePulse: {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
