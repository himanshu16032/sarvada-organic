import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        md: "2rem",
        lg: "3rem",
      },
      screens: {
        "2xl": "1320px",
      },
    },
    extend: {
      colors: {
        cream: {
          50: "#FDFAF4",
          100: "#FBF6EE",
          200: "#F5EBDA",
          300: "#EEDDC1",
        },
        forest: {
          50: "#EFF4ED",
          100: "#D6E2D1",
          200: "#A9BFA0",
          300: "#7C9C70",
          400: "#557849",
          500: "#3A5A2E",
          600: "#2F4A26",
          700: "#243A1D",
          800: "#1B2C15",
          900: "#101D0C",
        },
        peach: {
          100: "#FCE5D6",
          200: "#F7C9AE",
          300: "#F0A887",
          400: "#E89C7D",
          500: "#D77858",
        },
        sage: {
          100: "#E2EAD8",
          200: "#C8D7B6",
          300: "#A9BE90",
        },
        ink: "#1F2A1B",
        muted: "#6B6557",
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
        blob: "62% 38% 55% 45% / 50% 60% 40% 50%",
      },
      boxShadow: {
        soft: "0 18px 40px -20px rgba(47, 74, 38, 0.18)",
        ring: "0 0 0 6px rgba(216, 168, 135, 0.18)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "fade-up": "fade-up 0.7s ease-out both",
      },
    },
  },
  plugins: [],
} satisfies Config;
