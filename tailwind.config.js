/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        green: {
          800: "#00732E",
        },
        gray: {
          soft: {
            50: "#F0F1F3",
          },
        },
      },
      boxShadow: {
        subtle: "0px 1px 4px 0px rgba(12,12,13,0.05)",
        background: "0px 16px 18px 0px #0000000F",
      },
      borderWidth: {
        3: "3px",
      },
    },
  },
  plugins: [],
};
