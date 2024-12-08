/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./server/views/**/*.{ejs,html}", // make sure tailwind scans files in the views folder
    "./server/public/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

