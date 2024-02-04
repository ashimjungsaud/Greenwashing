/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif'],
      },
      boxShadow: {
        secondary: '10px 10px 20px rgba(2, 2, 2, 0.25)',
      },
    },
    
    colors:{
      'transparent': 'transparent',
      'color-0': '#187454',
      'color-1': '#182727',
      'color-2': '#3C5148',
      'color-3': '#6B8E4E',
      'color-4': '#B2C582',
      'color-5': '#D5DDDF',
      'color-6': '#F5F1DE',
      'color-7': '#E0ECDE',
      'white': '#FFFFFF',
      'black': '#000000',
      'gray': '#808191',
      'dark-gray': '#2c2f32',
      'o1': '#758467',
      'o2': '#819171',
      'o3': '#9CAF88',
      'o4': '#CBD5CO',
      'o5': '#DFE6DA',
      'primary': '#1dc071',
    }
  },
  plugins: [],
}
