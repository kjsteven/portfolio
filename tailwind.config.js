/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // or 'media' if you prefer OS-level dark mode detection
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1a1a1a', // Dark background
        'dark-card': '#2a2a2a', // Slightly lighter card background
        'dark-text': '#e0e0e0', // Light gray text
        'dark-text-secondary': '#a0a0a0', // Dimmer text
        'dark-accent': '#4f46e5', // Example accent (Indigo)
        'dark-border': '#3a3a3a', // Border color
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        slideInUp: 'slideInUp 0.7s ease-out',
      }
    }
  },
  plugins: []
};