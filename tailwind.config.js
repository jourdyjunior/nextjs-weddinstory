/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors : {
        "oren" : "#E79078" ,
      }
    },
    fontFamily : {
      display: ['DM Sans', 'sans-serif'],
      title: ['Baskervville', 'serif'],
    }
  },
  plugins: [],
}
