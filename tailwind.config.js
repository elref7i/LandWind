/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        prime: '#722DEB',
      },
    },
  },
  plugins: [require('daisyui')],
};
