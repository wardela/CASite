/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Cairo", "ui-sans-serif", "system-ui"],
      },
      colors: {
        blue: {
          300: "#5fc3da",
          400: "#2aa9c8",
          500: "#0884a9",
          600: "#066f8f",
          700: "#055d79",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
