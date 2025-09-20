/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        red: {
          700: '#E5372B',
          800: '#C6190D',
        },
        green: {
          700: '#02983E',
          800: '#00732E',
        },
        yellow: {
          50: '#FFF9ED',
          600: '#EBA622',
        },
        purple: {
          50: '#F2EDFF',
          600: '#6236CC',
        },
        blue: {
          50: '#ECF5FF',
          700: '#0053B5',
        },
        gray: {
          soft: {
            50: '#FAFAFA',
            500: '#667085',
            100: '#E0E2E7',
            700: '#525D73',
          },
        },
      },
      boxShadow: {
        subtle: '0px 1px 4px 0px rgba(12,12,13,0.05)',
        background: '0px 16px 18px 0px #0000000F',
        card: '0 1px 3px #0000000d',
      },
      borderWidth: {
        3: '3px',
      },
    },
  },
  plugins: [],
};
