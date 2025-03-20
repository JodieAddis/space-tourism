/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,ts,tsx}",
    "./public/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "#0B0D17",
        lightGrey: "#D0D6F9",
      },
      fontFamily: {
        Bellefair: ["Bellefair"],
        Barlow: ["Barlow"],
      },
    },
  },
  plugins: [],
};
