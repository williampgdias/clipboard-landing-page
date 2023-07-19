/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'bai-jamjuree': ["'Bai Jamjuree'", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        blue: 'hsl(233, 100%, 69%)',
        'dark-grayish-blue': 'hsl(210, 10%, 33%)',
        'grayish-blue': 'hsl(201, 11%, 66%)',
        cyan: 'hsl(171, 66%, 44%)',
      },
      boxShadow: {
        buttonIos: '1px 2px 0 hsl(171, 40%, 44%)',
        buttonMac: '1px 2px 0 hsl(233, 100%, 40%)',
      },
      fontWeight: {
        400: 400,
        600: 600,
      },
    },
  },
  plugins: [],
};
