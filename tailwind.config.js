/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f8faf9',
          100: '#f0f4f1',
          600: '#4b7355',
          800: '#2c4a33',
          900: '#1a2f20',
        },
      },
    },
  },
  plugins: [],
};