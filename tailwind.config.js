/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/views/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        dark: '#14213d',
        third: '#fca311',
        light: '#e5e5e5',
        white: '#ffffff',
      },
      fontFamily: {
        title: ['Aesthetic', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
