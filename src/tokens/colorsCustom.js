const defaultShade = '500';

const primaryColors = {
  400: "hsl(174, 90%, 34%)",
  500: "hsl(174, 100%, 29%)",
  600: "hsl(174, 100%, 25%)",
  700: "hsl(174, 100%, 22%)",
};
primaryColors.default = primaryColors[defaultShade];

const secondaryColors = {
  500: "hsl(16, 29%, 63%)",
  600: "hsl(16, 29%, 60%)",
  700: "hsl(16, 29%, 59%)",
};
secondaryColors.default = secondaryColors[defaultShade];

const errorColors = {
  500: "hsl(0, 64%, 58%)",
  600: "hsl(0, 64%, 55%)",
  700: "hsl(0, 64%, 53%)",
};
errorColors.default = errorColors[defaultShade];

const warningColors = {
  500: "hsl(45.5, 51.9%, 57.6%)",
};
warningColors.default = warningColors[defaultShade];

const linkColors = {
  500: "hsl(199, 77%, 46%)",
};
linkColors.default = linkColors[defaultShade];

const themeColors = {
  primary: primaryColors,
  secondary: secondaryColors,
  danger: errorColors,
  error: errorColors,
  warning: warningColors,
  link: linkColors,
};

module.exports = themeColors;
