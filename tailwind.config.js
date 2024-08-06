/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-1rem)',
          },
          '50%': {
            transform: 'translateY(0)',
          },
        },
        backgroundCycle: {
          '0%': {
            background: 'linear-gradient(to top, #d1fae5, #818cf8)', // from-green-300 to-indigo-500
          },
          '33%': {
            background: 'linear-gradient(to right, #d1fae5, #818cf8)', // from-green-300 to-indigo-500
          },
          '66%': {
            background: 'linear-gradient(to bottom, #d1fae5, #818cf8)', // from-green-300 to-indigo-500
          },
          '100%': {
            background: 'linear-gradient(to left, #d1fae5, #818cf8)', // from-green-300 to-indigo-500
          },
        },
      },
      animation: {
        bounce: 'bounce 5s ease-in-out infinite , backgroundCycle 5s ease-in-out infinite', 
        backgroundCycle: 'backgroundCycle 10s spin infinite',
      },
    },
  },
  plugins: [],
}
