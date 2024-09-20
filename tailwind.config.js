/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      margin: {
        sap1: '17.8rem',
        sap2: '20.2rem',
        sap3: '19.4rem',
        sap4: '17.2rem',
        sap5: '15.1rem',
        sap6: '20.1rem',

      },
      colors: {
        button: '#63A2B6'
      }

    },
  },
  plugins: [],
}