/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#e6f7e4',
          100: '#c4ebc3',
          200: '#9fdd9d',
          300: '#7acf76',
          400: '#5dca56',
          500: '#1ecc0e',
          600: '#1bb20d',
          700: '#18960b',
          800: '#1c7c06',
          900: '#135805',
        },
      },
    },
  },
  plugins: [],
}

