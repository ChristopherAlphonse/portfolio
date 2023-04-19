const flowbite = require('flowbite/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,md,html}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      primary: 'Marcellus',
      body: 'Nunito Sans',
    },
    fontSize: {
      normal: '20px',
      xl: '64px',
      lg: '30px',
    },
    letterSpacing: {
      wide: '.3em',
      wider: '.5em',
      widest: '.7em',
    },
    container: {
      padding: {
        DEFAULT: '.9rem',
        lg: '2.5rem',
      },
    },
    screens: {
      sm: '540px',
      md: '720px',
      lg: '960px',
      xl: '1140px',
      xxl: '1320px',
    },
    extend: {},
  },
  plugins: [flowbite],
};
