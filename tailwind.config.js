/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: {
          50:  '#FDF8F3',
          100: '#FBF7F0',
          200: '#F5E9D7',
          300: '#E8C896',
          400: '#D4A574',
          500: '#C9A227',
          600: '#A8801C',
          700: '#7C1D1D',
          800: '#5A1414',
          900: '#2A1810',
        },
        app: {
          primary:  '#7C1D1D',
          accent:   '#C9A227',
          bg:       '#FBF7F0',
          dark:     '#2A1810',
          muted:    '#8B7355',
        },
      },
      fontFamily: {
        Cormorant: ['"Cormorant Garamond"', 'serif'],
        Barlow: ['Barlow', 'sans-serif'],
        Opensans: ['Open Sans'],
        Poppins: ['Poppins'],
        Inter: ['Inter'],
        Raleway: ['Raleway'],
        Montserrat: ['Montserrat']
      },
    },
  },
  plugins: [],
}
