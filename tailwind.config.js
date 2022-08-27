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
        GrayCustom: "#666666",
      },
      fontFamily: {
        DroidSerif: "DroidSerif",
        DroidSerifB: "DroidSerifB",
        Roboto: "Roboto",
        RobotoL: "RobotoL",
      },
    },
  },
  plugins: [],
};
