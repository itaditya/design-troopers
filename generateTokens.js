const resolveConfig = require('tailwindcss/resolveConfig');

const config = require('./tailwind.config.js');

const tokens = resolveConfig(config).theme;

console.log(JSON.stringify(tokens, null, 2));
