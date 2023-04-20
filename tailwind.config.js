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
      xs: '12px',
      sm: '14px',

      lg: '22px',
      base: '20px',
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '36px',
      '5xl': '48px',
      xl: '64px',
      '7xl': '96px',
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
      ultra: '0.4em',
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
