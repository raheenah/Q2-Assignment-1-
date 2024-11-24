/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#0065FE",
        grey_highlight: "#E2E9F0",
        light_blue_bg: "#F9FBFD",
        grey_gradient: "#112232",
        white_gradient: "#4D6B88",
        light_blue_icon: "#E4EFFF",
      },
      fontFamily: {
        Gilroy: ["Gilroy", "sans-serif"],
      },
    },
  },
  plugins: [],
};
