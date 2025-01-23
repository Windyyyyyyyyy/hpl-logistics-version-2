/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans', 'Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#833d0c',
        'secondary-one': '#3f2a1a',
        'secondary-two': '#a65b2c',
      },
      screens: {
        '2sm': '450px',
      },
      boxShadow: {
        'custom-one': '0px 0px 12px rgba(0, 0, 0, .3)',
      },
    },
  },
  plugins: [],
};
