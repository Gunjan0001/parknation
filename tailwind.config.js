/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "4.375rem",
        "2xl": "12.375rem",
      },
    },
    extend: {
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        md: "20px",
        lg: "22px",
        xl: "24px",
        "2xl": "32px",
        "3xl": "40px",
        "4xl": "54px",
        "5xl": "56px",
      },

      colors: {
        primary: "#EB2022",
        secondary: "#26324D",
        black: "#020202",
        white: "#FAFAFA",
      },
    },
  },
};