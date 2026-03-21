/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#040613',
        surface: 'rgba(15, 20, 45, 0.5)',
        primary: '#613EEA',
        secondary: '#FFFFFF',
        accent: '#FF70A6',
        'text-primary': '#FFFFFF',
        'text-secondary': '#A4ADC6',
        border: 'rgba(255, 255, 255, 0.08)',
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
      backgroundImage: {
        'glow-gradient': 'linear-gradient(135deg, #613EEA, #FFFFFF, #FF70A6)',
        'glass-gradient': 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.0) 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
