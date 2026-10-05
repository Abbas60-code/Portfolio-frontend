/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#080808',
        card: '#121212',
        border: '#1a1a1a',
        accent: '#0066FF',
        primaryText: '#ffffff',
        secondaryText: '#a3a3a3',
      },
      fontFamily: {
        sans: ['Inter', 'Geist', 'sans-serif'],
      },
      borderRadius: {
        'xl': '16px',
      }
    },
  },
  plugins: [],
}
