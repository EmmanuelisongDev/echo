/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        echoOrange: "#ff824c",
        echoWhite: "#ffff",
        echoBorder: "#2f3336",
        echoLightGray: "#71767b",
        echoDarkGray: "#17181c",
      },
    },
  },
  plugins: [],
};
