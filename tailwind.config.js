/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./*.html'],
  theme: {
    extend: {
      spacing: {
        big: '48rem', // 768px
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      nunito: ['Nunito', 'sans-serif'],
    },
  },
  plugins: [],
}
//  npx tailwindcss -i ./input.css -o ./css/style.css --watch
