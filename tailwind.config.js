/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-desktop": "url('./src/assets/images/image-hero-desktop.jpg')",
        "hero-mobile": "url('./src/assets/images/image-hero-mobile.jpg')",
      },
      colors: {
        "moderate-cyan": "hsl(176, 50%, 47%)",
        "dark-cyan": "hsl(176, 72%, 28%)",
        "dark-gray": "hsl(0, 0%, 48%)",
      },
      screens: {
        "sm-2": "550px",
        // => @media (min-width: 550px) { ... }
        "sm-3": "400px",
        // => @media (min-width: 400px) { ... }
        "md-1": "700px",
        // => @media (min-width: 700px) { ... }
      },
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
      },
      gridTemplateColumns: {
        "pledgeCard-2": "2rem minmax(0, 1fr)",
        "pledgeCard-3": "2rem minmax(0, 1fr) 5rem",
      },
      width: {
        "1/10": "10%",
        "3/10": "30%",
        "7/10": "70%",
        "9/10": "90%",
      },
    },
    fontFamily: {
      commissioner: ["Commissioner", "sans-serif"],
    },
  },
  plugins: [],
};
