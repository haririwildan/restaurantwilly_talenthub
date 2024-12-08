/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./server/views/**/*.{ejs,html}", // make sure tailwind scans files in the views folder
    "./server/public/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#98BEA5',
        secondary: '#899489',
      }
    },
  },
  plugins: [],
}

