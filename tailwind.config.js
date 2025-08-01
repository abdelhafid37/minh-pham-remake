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
      fontFamily: {
        "ui-avantgarde": ["avantgarde", "Courier", "monospace"],
        "ui-nunito": ["nunito", "monospace"],
      },
      letterSpacing: {
        "ui-text": ".5em",
        "ui-display-title": ".5em",
        "ui-display-text": "-.001em",
        "ui-item-title": "-.05em",
      },
      lineHeight: {
        "ui-display-text": "84%",
        "ui-text": "105%",
      },
      margin: {
        "ui-margin": "16.6666667%",
      },
      padding: {
        "ui-padding": "28.7vh",
      },
      fontSize: {
        "ui-display-text": "8.3rem",
        "ui-text": "4.6rem",
        "ui-item-title": "8.2rem",
      },
      flexBasis: {
        "ui-left": "61%",
        "ui-right": "39%",
      },
      width: {
        "ui-text": "40ch",
      },
    },
  },
  plugins: [],
};
