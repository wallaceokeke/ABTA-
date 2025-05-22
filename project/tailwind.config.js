/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary colors
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        // African-inspired accent colors
        accent: {
          earth: '#8B4513',
          gold: '#FFD700',
          terracotta: '#E2725B',
          savanna: '#B8860B',
          sunset: '#FF7F50',
        },
        // Theme colors
        'light-bg': '#F9F7F2',
        'light-card': '#FFFFFF',
        'light-text': '#121212',
        'dark-bg': '#0F172A',
        'dark-card': '#1E293B',
        'dark-text': '#F3F4F6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'pattern-light': "url('/src/assets/pattern-light.svg')",
        'pattern-dark': "url('/src/assets/pattern-dark.svg')",
      },
    },
  },
  plugins: [],
};