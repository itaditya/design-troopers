module.exports = {
  stories: ['../src/**/*.stories.@(js|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
  ],
  webpackFinal: async config => {
    // do mutation to the config

    return config;
  },
};
