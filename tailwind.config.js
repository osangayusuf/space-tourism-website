/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "dark-blue": "#0B0D17",
        "light-blue": "#D0D6F9",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        "barlow-condensed": ["Barlow Condensed", "sans-serif"],
        bellefair: ["Bellefair", "serif"],
      },
      backgroundImage: {
        "home-desktop": "url('/images/home/background-home-desktop.jpg')",
        "home-mobile": "url('/images/home/background-home-mobile.jpg')",
        "home-tablet": "url('/images/home/background-home-tablet.jpg')",
        "destination-desktop":
          "url('/images/destination/background-destination-desktop.jpg')",
        "destination-mobile":
          "url('/images/destination/background-destination-mobile.jpg')",
        "destination-tablet":
          "url('/images/destination/background-destination-tablet.jpg')",
        "crew-desktop": "url('/images/crew/background-crew-desktop.jpg')",
        "crew-mobile": "url('/images/crew/background-crew-mobile.jpg')",
        "crew-tablet": "url('/images/crew/background-crew-tablet.jpg')",
        "technology-desktop":
          "url('/images/technology/background-technology-desktop.jpg')",
        "technology-mobile":
          "url('/images/technology/background-technology-mobile.jpg')",
        "technology-tablet":
          "url('/images/technology/background-technology-tablet.jpg')",
      },
    },
  },
  plugins: [],
};
