/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      clash: ["Clash Display", "sans-serif"],
      archivo: ["Archivo", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#FBAB7E",
        "gray-1": "#fcf3ea",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
