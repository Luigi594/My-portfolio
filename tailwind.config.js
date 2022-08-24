/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
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
