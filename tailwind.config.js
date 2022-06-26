/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'hot-pink': '#FF7594',
        'orange-peach': '#FF7C65',
        'baby-peach': '#FFF5F5',
        'smoky-black': '#150A09',
        'dark-sienna': '#2e1619',
      },
      fontFamily: {
        body: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
