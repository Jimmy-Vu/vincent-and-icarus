/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './index.html',
    './client/src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: ['Manrope', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      animation: {
        'bounce-slow': 'bounce 2s infinite'
      },
      keyframes: {
      }
    }
  },
  plugins: []
}
