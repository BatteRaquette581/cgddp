/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#4e5663",
        "secondary": "#6d798c"
      }
    },
    fontFamily: {
      "Kumbh Sans": ["Kumbh Sans, Arial, Helvetica, sans-serif"]
    }
  },
  plugins: [],
}

