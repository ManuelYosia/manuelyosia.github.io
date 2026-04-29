import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-container": "#1f1f1f",
        "on-surface-variant": "#bdc8d3",
        "surface": "#131313",
        "error-container": "#93000a",
        "on-secondary": "#263143",
        "surface-container-low": "#1b1b1b",
        "on-primary-fixed": "#001e30",
        "inverse-on-surface": "#303030",
        "on-primary-container": "#003f60",
        "outline-variant": "#3e4851",
        "on-background": "#e2e2e2",
        "outline": "#88929c",
        "surface-tint": "#8fcdff",
        "background": "#131313",
        "on-secondary-container": "#aeb9d0",
        "secondary": "#bcc7de",
        "primary-fixed": "#cbe6ff",
        "error": "#ffb4ab",
        "primary": "#8fcdff",
        "surface-variant": "#353535",
        "primary-fixed-dim": "#8fcdff",
        "on-primary": "#00344f",
        "surface-dim": "#131313",
        "primary-container": "#0cafff",
        "secondary-container": "#3e495d",
        "tertiary-fixed": "#ffdcbc",
        "on-surface": "#e2e2e2",
        "surface-container-lowest": "#0e0e0e",
        "surface-bright": "#393939",
        "tertiary-container": "#ed9000",
        "surface-container-high": "#2a2a2a",
        "surface-container-highest": "#353535",
        "tertiary": "#ffb86c",
        "inverse-surface": "#e2e2e2",
        "inverse-primary": "#006494"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "full": "9999px"
      },
      fontFamily: {
        "headline": ["Inter"],
        "body": ["Inter"],
        "label": ["Inter"]
      }
    }
  },
  plugins: [],
};
export default config;
