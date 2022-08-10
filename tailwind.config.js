/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      playFair: ["Playfair Display", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },

    extend: {
      colors: {
        gray: {
          400: "rgba(150, 144, 144, 0.4)",
          900: "rgba(30, 32, 37, 1)",
        },
        martBlack: "rgba(0,0,0,1)",
        martBlack700: "rgba(0,0,0,0.7)",
        borderBrown: "rgba(122, 47, 47, 0.27)",
      },
    },
  },
  plugins: [],
};
