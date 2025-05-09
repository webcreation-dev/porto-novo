/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bleuFonce: '#0D1028',
        app: {
          principal: '#28AC87',
          fondGrid: '#F1F5F9'
        }
      },
      fontFamily: {
        Opensans: ['Open Sans'],
        Poppins: ['Poppins'],
        Barlow: ['Barlow'],
        Inter: ['Inter'],
        Raleway: ['Raleway'],
        Montserrat: ['Montserrat']
      },
    },
  },
  plugins: [],
}

