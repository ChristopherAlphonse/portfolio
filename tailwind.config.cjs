/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,md,html}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      primary: 'Marcellus',
      body: 'Nunito Sans',
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
  plugins: [require('flowbite/plugin'), require('prettier-plugin-tailwindcss')],
};
