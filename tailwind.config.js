/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        buttonCircle: "#e1e1e1",
        lightBlue: "#4e69a1",
        darkBlue: "#31549D",
        veryDarkBlue: "#1E3D7D",
        headerBase: "#fefefe",
        groundBase: "#fafafa", // edit in global.css
      },
    },
  },
  plugins: [],
};
