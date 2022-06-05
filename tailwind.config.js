const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: [
        "Poppins",
        "Segoe UI",
        "Roboto",
        "Helvetica",
        "Arial",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
      ],
    },   
    extend: {
      fontSize: {
        xxs: '.625rem',
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "0.5rem",
        xxs: "0.5rem",
        xs: "0.5rem",
        sm: "1rem",
        md: "2rem",
        lg: "2rem",
        xl: "2.5rem",
      },
    },
    screens: {
      xxs: "360px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    colors: {
      blue: colors.blue,
      black: colors.black,
      rose: colors.rose,
      green: colors.green,
      purple: colors.purple,
      yellow: colors.yellow,
      pink: colors.pink,
      white: "#fafafa",
      gray: colors.gray,
      teal: colors.teal,
      sky: colors.sky,
      indigo: colors.indigo,
      slate: "#484848",
      gradient1: "#3d5afe",
      gradient2: "#84ffff",
      portfolioBlack: "#262635",
      eventgrabBlack: "#101010",
      graphite01: "#9A9A9A",
      graphite02: "#E0E2E6",
      graphite03: "#E8EAEC"
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
