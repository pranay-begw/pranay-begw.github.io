/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'dark-bg': '#1a1a1a',
        'darker-bg': '#121212',
        'teal-accent': '#00b3b3',
        'teal-hover': '#00e6e6',
        'card-bg': '#242424',
      },
    },
  },
  plugins: [],
}
