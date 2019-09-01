const { colors } = require('tailwindcss/defaultTheme');

const themeColors = require('./src/tokens/colors.js');

const config = {
  prefix: 'dt-',
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      ...themeColors,
    },
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
