/** @type {import('tailwindcss').Config} */
export default {

  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  
  theme: {
    colors: {
      "blue":{
        100: "#102C54",
        200: "#23A2CA"
      },
      "gray": {
        100: "#D9D9D9",
        200: "#A7A0A0"
      },
      "white": "#FFF"
    },
    extend: {
    },
  },
  plugins: [
    
  ],
}

