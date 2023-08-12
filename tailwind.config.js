/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      // clash: ["Clash Display", "sans-serif"],
      // archivo: ["Archivo", "sans-serif"],
      // poppins: ["Poppins", "sans-serif"],
      fira: ["Fira Code", "sans-serif"],
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
