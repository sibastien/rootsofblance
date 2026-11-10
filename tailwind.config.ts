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
        cyber: {
          dark: "#050B0E",
          card: "rgba(10, 24, 28, 0.65)",
          border: "rgba(0, 255, 178, 0.18)",
          neon: "#00FFB2",
          emerald: "#10B981",
          cyan: "#00E5FF",
          glow: "rgba(0, 255, 178, 0.35)",
        },
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
          950: "#0D1814",
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
          950: "#0A0D0C",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Orbitron", "Exo 2", "sans-serif"],
        serif: ["var(--font-serif)", "Playfair Display", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      animation: {
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'aurora': 'aurora 12s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(12px)' },
        },
        aurora: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
      },
      boxShadow: {
        'neon-emerald': '0 0 25px -5px rgba(0, 255, 178, 0.4), 0 0 10px -2px rgba(0, 255, 178, 0.25)',
        'neon-cyan': '0 0 25px -5px rgba(0, 229, 255, 0.4), 0 0 10px -2px rgba(0, 229, 255, 0.25)',
        'glass-hover': '0 12px 36px 0 rgba(0, 255, 178, 0.12), inset 0 1px 1px 0 rgba(255, 255, 255, 0.2)',
      },
    },
  },
  plugins: [],
};
export default config;
