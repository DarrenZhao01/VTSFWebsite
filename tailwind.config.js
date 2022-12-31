/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./dist/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        "peach1": "#ffd8b7",
        "peach2": "rgb(212, 110, 16)",
        "peach3": "orange",
        "red1": "#980A00",
        "green1": "#60A42C"
      },
      spacing: {
        "30rem": "30rem",
        "40rem": "40rem",
        "1500px": "1500px",
        "full": "100%"
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