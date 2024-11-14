/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A",  // Warna custom
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],  // Font custom
      },
    },
  },
  plugins: [],
};
