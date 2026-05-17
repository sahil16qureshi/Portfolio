import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#070A12",
        panel: "#0E1424",
        panelSoft: "#121A2C",
        line: "rgba(148, 163, 184, 0.18)",
        cyanSoft: "#67E8F9",
        violetSoft: "#A78BFA",
        emeraldSoft: "#6EE7B7",
      },
      boxShadow: {
        glow: "0 24px 80px rgba(103, 232, 249, 0.12)",
        card: "0 20px 60px rgba(0, 0, 0, 0.28)",
      },
      fontFamily: {
        sans: ["Times New Roman", "Times", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
