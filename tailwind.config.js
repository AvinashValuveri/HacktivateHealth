/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#000000',
        'secondary': '#ffffff',
        'accent': '#333333',
        'light': '#f4f4f4',
      },
      fontFamily: {
        mono: ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};