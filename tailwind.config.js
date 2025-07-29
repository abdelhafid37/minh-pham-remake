/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "ui-red": "rgb(235, 89, 57)",
        "ui-accent": "rgb(183, 171, 152)",
        "ui-black": "rgb(13, 13, 13)",
        "ui-white": "rgb(240, 240, 240)",
        "ui-gray-dark": "rgb(77, 77, 77)",
        "ui-gray-light": "rgba(184, 172, 153, 0.5)",
      },
    },
  },
  plugins: [],
};
