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
        xxs: "0.2rem",
        xs: "0.5rem",
        sm: "1rem",
        md: "2rem",
        lg: "2rem",
        xl: "2.5rem",
      },
    },
    screens: {
      xs: "320px",
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
      white: colors.white,
      gray: colors.gray,
      teal: colors.teal,
      slate: "#484848",
      graphite01: "#9A9A9A",
      graphite02: "#E0E2E6",
      graphite03: "#E8EAEC"
    },
  },
  plugins: [],
};
