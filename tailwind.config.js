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
        "3xl": "32px",
        "4xl": "40px",
        "5xl": "54px",
        "6xl": "56px",
      },

      colors: {
        primary: "#EB2022",
        secondary: "#26324D",
        black: "#020202",
        white: "#FAFAFA",
      },
      boxShadow: {
        contactusboxshadow: " 0px -6px 42px 0px rgba(16, 0, 0, 0.07)",
      },
      // backgroundImage: {
      //   blog: "url('../assests/images/webp/blogbg.webp')",
      // },
      backgroundImage: {
        blog: "url('./assests/images/webp/blogbg.webp')",
        herobg: "url('./assests/images/png/hero.png')",
        collboratebg: "url(./assests/images/png/collabratehomepagebg.png)",
      },
    },
  },
};
