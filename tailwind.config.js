/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gillSansRegular: ["GillSans-Regular", "sans-serif"],
        gillSansBold: ["GillSans-Bold", "sans-serif"],
        gillSansLight: ["GillSans-Light", "sans-serif"],
      },
      colors: {
        customRed: "#d50037",
        customBlue: "#002e5b",
        customGray: "#54565a",
      },
    },
  },
  plugins: [],
};
