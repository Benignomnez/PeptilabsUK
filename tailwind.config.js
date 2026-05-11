/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          300: '#f0d060',
          400: '#d4a017',
          500: '#c9a227',
          600: '#b8911f',
          700: '#9a7a1a',
        },
        navy: {
          950: '#03080f',
          900: '#050b18',
          800: '#0a1628',
          700: '#0f2040',
          600: '#1a3055',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
