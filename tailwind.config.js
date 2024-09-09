const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '385px',
        ...defaultTheme.screens,
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        jetbrains: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        custom_black: '#10100E',
        custom_cream: '#FFFFE3',
        custom_orange: '#D85C17',
      },
    },
  },
  plugins: [],
};
