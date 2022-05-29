const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {},
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '0.5rem',
        xxs: '0.2rem',
        xs: '0.5rem',
        sm: '1rem',
        md: '2rem',
        lg: '2rem',
        xl: '2.5rem'
      }
    },
    screens: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    colors: {
      blue: colors.blue,
      pink: colors.pink,
      white: colors.white,
      gray: colors.gray,
      teal: colors.teal
    }
  },
  plugins: [],
}
