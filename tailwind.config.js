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
     keyframes: {
  waveX: {
    '0%': { transform: 'translateX(0)' },
    '100%': { transform: 'translateX(-50%)' },
  },
  waveXReverse: {
    '0%': { transform: 'translateX(-50%)' },
    '100%': { transform: 'translateX(0)' },
  },
},
animation: {
  'wave-x': 'waveX 4s linear infinite',
  'wave-x-reverse': 'waveXReverse 6s linear infinite',
},
    },
  },
  plugins: [],
};