/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        input: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        primary: 'linear-gradient(270deg, #903AFF 0%, #FE34B9 100%)',
        'purple-50': '#D434FE',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['Clash Display', 'sans-serif'],
        unica: ['Unica One', 'cursive'],
      },
    },
  },
  plugins: [],
};
