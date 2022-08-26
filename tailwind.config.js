/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueCustom: "#00aeef",
      },
      fontFamily: {
        Roboto: "Roboto",
        DroidSerif: "DroidSerif",
        Pacifico: "Pacifico",
      },
    },
  },
  plugins: [],
};
