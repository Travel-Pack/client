/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yelloku: "#ffe500",
      },
      animation:{
        pulseslow : "pulse 3s ease-in-out infinite;"
      }
      
    },
  },
  plugins: [require("flowbite/plugin")],
}
