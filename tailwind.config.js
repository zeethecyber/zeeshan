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
    },
    extend: {
      colors: {
        primary: "#ff873c",
        "gray-1": "#fcf3ea",
      },
    },
  },
  plugins: [],
};
