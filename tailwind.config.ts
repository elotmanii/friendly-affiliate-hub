import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#EAEDED",
        foreground: "#111111",
        amazon: {
          orange: "#FF9900",
          dark: "#131921",
          light: "#232F3E",
          blue: "#146EB4",
          yellow: "#FFD814",
        },
        primary: {
          DEFAULT: "#131921",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#232F3E",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#FF9900",
          foreground: "#000000",
        },
        muted: {
          DEFAULT: "#F5F5F7",
          foreground: "#131921",
        },
      },
      keyframes: {
        "fade-up": {
          "0%": { 
            opacity: "0",
            transform: "translateY(10px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "fade-in": "fade-in 0.3s ease-out"
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;