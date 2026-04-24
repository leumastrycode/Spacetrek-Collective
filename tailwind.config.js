/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        plexMono: ['var(--font-plex-mono)'],
        roboto: ['var(--font-roboto)'],
        inter: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
};