/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        "32px": "32px",
        "20px": "20px",
        "24px": "24px",
        // Custom size
      },
      minWidth: {
        "374px": "374px",
        "401px": "40px",
      },
      width: {
        "374px": "374px",
        "401px": "40px",
      },
      maxWidth: {
        "374px": "374px",
        "401px": "40px",
      },
      colors: {
        graycustom: "#999999",
        darkgray: "#666666",
        yellow: "#FFBF00",
        darkyellow: "#CC9900", // Custom gray color
      },
    },
  },
  plugins: [],
};
