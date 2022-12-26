/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./dist/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        "circle-peach": "#ffd8b7",
        "button-red": "#980A00"
      },
      spacing: {
        "30rem": "30rem",
        "40rem": "40rem",
        "1500px": "1500px"
      },
      listStyleType: {
        "circle": "circle",
      },
      lineHeight: {
        "0": "0rem",
      },
    },
  },
  plugins: [
    ({ addVariant }) => {
      addVariant("child", "& > *");
    }
  ],
}