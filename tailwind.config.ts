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
        background: "var(--background)",
        foreground: "var(--foreground)",
        parchment: {
          50: "#faf6ef",
          100: "#f3ead6",
          200: "#e8d5ad",
          300: "#d9b87a",
          400: "#cc9d52",
          500: "#bf8639",
          600: "#a16a2e",
          700: "#835028",
          800: "#6d4226",
          900: "#5d3823",
        },
        magic: {
          gold: "#c9a84c",
          "gold-light": "#e8d28a",
          bronze: "#8b6914",
          maroon: "#6b1d1d",
          "deep-red": "#8b1a1a",
          ink: "#1a1207",
          "dark-brown": "#2c1810",
          sepia: "#704214",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Playfair Display", "serif"],
        display: ["Playfair Display", "Georgia", "serif"],
        body: ["Lora", "Georgia", "serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "typewriter": "typewriter 4s steps(44) 1s 1 normal both",
        "blink": "blink 1s step-end infinite",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "marquee": "marquee 30s linear infinite",
        "sparkle": "sparkle 1.5s ease-in-out infinite",
        "breathe": "breathe 4s ease-in-out infinite",
        "unfold": "unfold 0.8s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(201, 168, 76, 0.3)" },
          "100%": { boxShadow: "0 0 20px rgba(201, 168, 76, 0.6)" },
        },
        typewriter: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        sparkle: {
          "0%, 100%": { opacity: "0", transform: "scale(0)" },
          "50%": { opacity: "1", transform: "scale(1)" },
        },
        breathe: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        unfold: {
          from: { opacity: "0", transform: "scaleY(0)", transformOrigin: "top" },
          to: { opacity: "1", transform: "scaleY(1)", transformOrigin: "top" },
        },
      },
      backgroundImage: {
        "parchment-texture": "url('/textures/parchment.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
