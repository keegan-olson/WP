/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'righteous': ['Righteous', 'cursive'],
        'permanent-marker': ["Permanent Marker", 'cursive'], 
        'karla': ['Karla', 'sans-serif'],
      }
    },
  },
  plugins: [],
}