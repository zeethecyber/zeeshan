/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      condensed: ["Roboto Condensed", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#C778DD",
        "gray-1": "#ABB2BF",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
