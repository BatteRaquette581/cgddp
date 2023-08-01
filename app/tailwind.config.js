/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["index.html", "src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#331d2c",
        "secondary-dark": "#3f2e3e",
        //"primary-light": "#f5e9e9",
        //"secondary-light": "#faf5f5"
        "primary-light": "#ffcccc",
        "secondary-light": "#ffddcc"
      }
    },
    fontFamily: {
      "KumbhSans": ["Kumbh Sans, Arial, Helvetica, sans-serif"]
    }
  },
  plugins: [],
}

