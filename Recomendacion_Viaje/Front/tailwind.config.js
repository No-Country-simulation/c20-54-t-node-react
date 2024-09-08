/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      // "primary-color": "#84B6F4",
      "primary-color": "#0091be",
      "secondary-color": "#ffffff",
      "action-color":"#52CF6C",
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

