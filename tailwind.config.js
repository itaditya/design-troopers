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
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [
    require('tailwindcss-transitions')(),
  ],
}

module.exports = config;
