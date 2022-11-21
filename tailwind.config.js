/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dist/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        "circle-peach": "#ffd8b7"
      },
      spacing: {
        "40rem": "40rem",
        "50rem": "50rem",
        "1500px": "1500px"
      }
    },
  },
  plugins: [
    ({ addVariant }) => {
      addVariant("child", "& > *");
    }
  ],
}