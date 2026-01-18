/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rich-black': '#0a0a0a',
        'mustard': '#FFC107',
        'flame-red': '#EF4444',
      },
      fontFamily: {
        'heading': ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
