/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        input: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        sm: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
        'purple-lens': "url('/src/assets/images/purple-lens-flare.png')",
        'double-lens': "url('/src/assets/images/double-lens.png')",
      },
      backgroundColor: {
        primary:
          'linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)',
      },
      backgroundPosition: {
        0.093: '0px -0.093px',
        7: '-204.25px 7px',
      },
      backgroundSize: {
        109.967: '100% 109.967%',
        104: '119.817% 104.852%',
      },
      colors: {
        primary:
          'linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)',
        'purple-50': '#D434FE',
        'purple-100': '#903AFF',
        pink: '#FF26B9',
        'blue-deep': '#150E28',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['Clash Display', 'sans-serif'],
        unica: ['Unica One', 'cursive'],
      },
      screens: {
        tab: '960px',
        xs: '390px',
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
};
