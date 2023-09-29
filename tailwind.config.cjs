/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "display-yellow": '#f3d753',
        "display-brown": '#3b302e'
      }
    },
  },
  plugins: [],
}
