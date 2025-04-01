/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/hero.png')",
        play: "url('/play-bg.webp')",
        faq: "url('/faq-bg.webp')",
        faqwave: "url('/faqwave.png')",
        gamedev: "url('/about.webp')",
        btn: "linear-gradient(45deg, #91b61c 0%, #d5f066 51%, #91b61c 100%)",
      },
      boxShadow: {
        btn: "0px 0px 14px -7px #d5f066",
      },
      containers: {
        "2xs": "16rem",
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
      },
      colors: {
        primary: "#167ac6",
        "primary-hover": "#156AAB",
        pink: "#fc71e4",
        blue: "#4198de",
        green: "#30C520",
      },
      screens: {
        xs: "480px",
        smd: "640px",
        "2xl": "1536px",
        "3xl": "1920px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        scroll: "scroll 30s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
    require("@tailwindcss/container-queries"),
    require("tailwindcss-animate"),
    require("@tailwindcss/line-clamp"),
  ],
};
