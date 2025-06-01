/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'tactview-gold': '#B8860B',
        'tactview-dark': '#121212',
        'tactview-gray': '#1E1E1E',
      },
    },
  },
  plugins: [],
};