/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pastel-rose': '#FFB7C5',
        'pastel-rose-light': '#FFC7D5',
        'pastel-rose-dark': '#FFA7B5',
        'pastel-blue': '#AEC6CF',
        'pastel-blue-light': '#BED6DF',
        'pastel-blue-dark': '#9EB6BF',
        'pastel-yellow': '#FDFD96',
        'pastel-yellow-light': '#FEFEA6',
        'pastel-yellow-dark': '#FCFC86',
        'pastel-green': '#77DD77',
        'pastel-green-light': '#87ED87',
        'pastel-green-dark': '#67CD67',
        'pastel-orange': '#FFB347',
        'pastel-orange-light': '#FFC357',
        'pastel-orange-dark': '#FFA337',
        'pastel-purple': '#CBAACB',
        'pastel-purple-light': '#DBBAE9',
        'pastel-purple-dark': '#BBAABD',
        'pastel-pink': '#F49AC2',
        'pastel-pink-light': '#F59AD2',
        'pastel-pink-dark': '#F38AB2',
        'pastel-teal': '#B2D8D8',
        'pastel-teal-light': '#C2E8E8',
        'pastel-teal-dark': '#A2C8C8',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Configura 'Inter' como la fuente principal
      },
      fontSize: {
        base: ['16px', '24px'], // Tamaño base de texto con una línea de 24px
        lg: ['18px', '28px'], // Tamaño grande de texto con una línea de 28px
        title: ['32px', '40px'], // Tamaño de título con una línea de 40px
      },
      fontWeight: {
        text: '400', // Peso normal para texto
        textBold: '600', // Peso grueso para texto
        title: '700', // Peso para títulos
      },
    },
    screens: {
      'sm': '640px',  // Pequeños dispositivos móviles
      'md': '768px',  // Tabletas
      'lg': '1024px', // Laptops
      'xl': '1280px', // Escritorios
      '2xl': '1536px',// Pantallas grandes
    },
    
  },
  plugins: [],
}

