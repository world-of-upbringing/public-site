/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      green: "#BBD75B",
      "dark-green": "#184F13",
      white: "#FFFFFF",
      grey: "#555555",
      "light-grey": "#999999",
    },
    extend: {
      spacing: {
        1536: "1536px",
        1280: "1280px",
        1024: "1024px",
        768: "768px",
        600: "600px",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
