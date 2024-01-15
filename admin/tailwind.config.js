/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'sm': '450px',
        'md': '1080px',
        'lg': '1280px',
        'xl': '1440px',
      },
    },
  },
  plugins: [require("daisyui")],
  
}