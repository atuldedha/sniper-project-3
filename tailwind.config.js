/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white1: "#E6E6E6",
        pink1: "#F6F0FF",
        pink2: "#F2F1FA",
        purple1: "#47306A",
        purple2: "#461E85",
        purple3: "#461E8599",
        gray1: "#3B3840",
        gray2: "#838187",
        gray3: "#3A3A3A",
        gray4: "#ECEBEE",
        green1: "#48BA6F",
        green2: "#D9F8E3",
        borderPurple: "#461E8533",
      },
      fontFamily: {
        nuni: ["Nunito Sans", "sans-serif"],
      },
      boxShadow: {
        med: "0px 0px 30px 2px rgba(164, 147, 190, 0.2)",
        large: "0px 0px 20px 2px rgba(195, 190, 202, 0.16)",
      },
    },
  },
  plugins: [],
};
