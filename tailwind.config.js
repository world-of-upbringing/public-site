/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#C0D66D",
      background: "#FFFFFF",
      highlight: "#5B914C",
      white: "#FFFFFF",
      grey: "#555555",
      "light-grey": "#999999",
    },
    extend: {
      spacing: {
        1024: "1024px",
        768: "768px",
        640: "640px",
      },
    },
  },
  plugins: [],
};
