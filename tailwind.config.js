/** @type {import('tailwindcss').Config} */
import { withUt } from "uploadthing/tw";
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = withUt({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        "dark-red": "#d80032",
        "light-red": "#ef233c",
        "light-bg": "#edf2f4",
        "dark-bg": "#8d99ae",
        "dark-blue": "#2b2d42",
      },
      backgroundImage: {
        "admin-svg": "url('/triangle.svg')",
      },
    },
  },
  plugins: [],
});
