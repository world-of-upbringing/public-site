/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#C0D66D",
      green:"#BBD75B",
      "dark-green":"#184F13",
      background: "#FFFFFF",
      highlight: "#5B914C",
      white: "#FFFFFF",
      "white-20": "$FFFFFF33",
      grey: "#555555",
      "light-grey": "#999999",
    },
    extend: {
      spacing: {
        1200: "1200px",
        1000: "1024px",
        750: "768px",
        600: "640px",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
