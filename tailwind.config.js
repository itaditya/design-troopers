const colorsCustom = require('./src/tokens/colorsCustom.js');

const config = {
  prefix: 'dt-',
  theme: {
    extend: {
      colors: colorsCustom,
    }
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'active'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    opacity: ['disabled'],
    cursor: ['disabled'],
  },
  plugins: [
    require('tailwindcss-transitions')(),
  ],
}

module.exports = config;
