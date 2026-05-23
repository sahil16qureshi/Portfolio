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
        redSoft: "#E11D48",
        violetSoft: "#FB7185",
        emeraldSoft: "#6EE7B7",
      },
      boxShadow: {
        glow: "0 24px 80px rgba(225, 29, 72, 0.18)",
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
