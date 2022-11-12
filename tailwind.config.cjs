module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,md,html}"],
  darkMode: "media", // or 'class'
  theme: {
    fontFamily: {
      primary: "Playfair Display SC",
      secondary: "Forum",
      body: "Forum",
    },
    container: {
      padding: {
        DEFAULT: ".9rem",
        lg: "2.5rem",
      },
    },
    screens: {
      sm: "700px",
      md: "900px",
      lg: "1400px",
      xl: "2300px",
    },
    extend: {
      content: {
        about: 'url("/src/assets/img/outline-text/about.svg")',
        portfolio: 'url("/src/assets/img/outline-text/portfolio.svg")',
        contact: 'url("/src/assets/img/outline-text/contact.svg")',
      },
      colors: {
        primary: "#050402",
        secondary: "#1C1D24",
        tertiary: "#131419",
        accent: {
          DEFAULT: "#7FC7EB",
          hover: "#639CB8",
        },
        paragraph: "#D1D1D1",
      },
    },
  },
  plugins: [],
};
