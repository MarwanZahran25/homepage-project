/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        playfare: ["Playfair Display"],
        roboto: ["Roboto"],
      },
      backgroundImage: {
        model: "",
      },
    },
  },
  plugins: [],
};
