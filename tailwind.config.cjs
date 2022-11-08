/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        squada: ['"Squada One"', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        project: "url('/src/assets/project-bg.jpg')",
      },
    },
  },
  plugins: [],
};
