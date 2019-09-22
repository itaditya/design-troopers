const resolveConfig = require('tailwindcss/resolveConfig');

const config = require('../../tailwind.config.js');

const tokens = resolveConfig(config).theme;

module.exports = tokens;
