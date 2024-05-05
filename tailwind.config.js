/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-desktop": "url('./src/assets/images/image-hero-desktop.jpg')",
        "hero-mobile": "url('./src/assets/images/image-hero-mobile.jpg')",
      },
    },
    fontFamily: {
      commissioner: ["Commissioner", "sans-serif"],
    },
  },
  plugins: [],
};
