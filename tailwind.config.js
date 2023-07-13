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
        allsitecard: "0px 0px 30.92222023010254px 0px rgba(0, 0, 0, 0.16)",
        Testimonalsshadow: "0px 12px 35px 0px rgba(0, 0, 0, 0.10)",
      },
      backgroundImage: {
        blog: "url('./assests/images/webp/blogbg.webp')",
        security: "url('./assests/images/png/security_bg.png')",
        herobg: "url('./assests/images/png/hero.png')",
        AboutUs: "url('./assests/images/png/aboutUs_bg.png')",
        HowItWork: "url('./assests/images/png/howItWorks_bg.png')",
        touch: "url('./assests/images/png/touch_bg.png')",
        collboratebg: "url(./assests/images/png/collabratehomepagebg.png)",
        bettersecuritybg: "url(./assests/images/png/bettersecuritybg.png)",
      },
    },
  },
};
