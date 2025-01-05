/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0A1D37',
        peach: '#FFBD9B',
        lightPeach: '#FFD8CC',
        cream: '#FFEEDB',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      dropShadow: {
        'glow': [
          '0 0 10px rgba(255, 189, 155, 0.3)',
          '0 0 20px rgba(255, 189, 155, 0.2)',
          '0 0 30px rgba(255, 189, 155, 0.1)'
        ],
      },
    },
  },
  plugins: [],
}