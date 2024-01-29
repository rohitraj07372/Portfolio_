/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
 
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:{
         fontFamily:{
          rohit:['Berkshire Swash'],
          designation:['Chewy']
         }
    },
    backgroundImage: {
      'portfolio': "url('./assets/portfolio.jpg')",
       'p_mobile': "url('./assets/portfolio_mpbile.jpg')",
      'footer-texture': "url('/img/footer-texture.png')",
    },
    screens: {
      'xs': '300px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}

 