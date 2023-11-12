/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
       'libre' : ["Libre Baskerville"],
      },
      colors : {
        indigo : '#011665'
      },
      listStyleImage: {
        check: 'url("../assets/check.svg")',
      },
    },
  },
  plugins: [],
}

