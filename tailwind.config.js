/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBlue: "#202136",
        lightBlue: "#424159",
        lightWhite: "#F7F8FC",
        darkGray: "#878A99",
        ligthGray: "#DCDFEE"
      }
    },
  },
  plugins: [],
}
