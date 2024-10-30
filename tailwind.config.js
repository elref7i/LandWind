/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        prime: '#722DEB',
      },
    },
  },
  plugins: [require('daisyui')],
};
