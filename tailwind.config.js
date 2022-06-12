const theme = require('tailwindcss/defaultTheme')


module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', ...theme.fontFamily.sans],
        montserrat : ['"Montserrat"', ...theme.fontFamily.sans],
      },
      colors: {
        "primary-dark": "#0D0D0D",
        "primary-light": "#F2F2F2",
        "primary-dark-hover": "#0D0D0D",
        "primary-light-hover": "#F2F2F2",
      }
    },
  },
  plugins: [],
}
