/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        horizon: ['Horizon', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        pressstart: ['Press Start 2P', 'cursive'],
        orbitron: ['Orbitron', 'sans-serif'],
        dosis: ['Dosis', 'sans-serif'],
        'special-gothic': ['Special Gothic Expanded One', 'sans-serif'],
        'winky-rough': ['Winky Rough', 'sans-serif'],
      },
      animation: {
        scaleUp: 'scaleUp 0.3s ease-in-out',
      },
      keyframes: {
        scaleUp: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}