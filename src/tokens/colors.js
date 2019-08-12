const { colors } = require('tailwindcss/defaultTheme');

const themeColors = {
  primary: {
    400: "hsl(174, 90%, 25%)",
    500: "hsl(174, 100%, 29%)",
    600: "hsl(174, 100%, 25%)",
    700: "hsl(174, 100%, 23%)",
  },
  secondary: "hsl(16, 29%, 63%)",
  error: "hsl(0, 64%, 58%)",
  warning: "hsl(45, 72%, 60%)",
  link: "hsl(199, 77%, 46%)",
  disabled: colors.gray['300'],
};

module.exports = themeColors;
