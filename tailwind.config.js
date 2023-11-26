/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend: {
      fontFamily: {
        coolvetica: ["Coolvetica", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('assets/images/hero-bg.jpg')",
      },
      colors: {
        "dark-blue": "#06071B",
        "purple": "#0D0921",
        "slate-gray": "#ACACAC",
        "white-gray": "#E9E9E9",
        "orange": "#FF7000"
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
}
