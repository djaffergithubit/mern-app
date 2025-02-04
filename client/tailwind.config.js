/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        powderBlue: "#DFEBF2",
        deepTeal: "#144C59",
        mintGreen: "#04BF7B",
        forestJade: "#208C65",
        warmPeach: "#F2A679",
      },
    },
  },
  plugins: [],
}