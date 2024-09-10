/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      // "primary-color": "#84B6F4",
      "primary-color": "#009929",
      "secondary-color": "#ffffff",
      "action-color":"#2281ce",
      "filter-color":"#a4fff7",
      "bg-info": " rgba(218, 213, 210, 0.5)",
      "bg-opinions":"rgba(218,213,210,0.2)"
    },
    extend: {
      fontFamily: {
        title: [ "Lato", "sans-serif"],
        body: ["Montserrat", "sans-serif"],
        logo:["Lobster", "sans-serif"]
      },
    },
  },
  plugins: [],
}

