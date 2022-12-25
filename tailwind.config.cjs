/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx,md,html}",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      primary: "Playfair Display SC",
      body: "Open Sans",
    },
    container: {
      padding: {
        DEFAULT: ".9rem",
        lg: "2.5rem",
      },
    },
    screens: {
      xs: "356",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: "#050402",
        secondary: "#1C1D24",
        tertiary: "#1C1D24",
        accent: {
          DEFAULT: "rgb(28 100 242 )",
          hover: "rgb(28 100 242 )",
        },
        paragraph: "#D1D1D1",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("prettier-plugin-tailwindcss")],
};
