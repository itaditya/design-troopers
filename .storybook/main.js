module.exports = {
  stories: ['../src/**/*.stories.@(js|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-notes/register',
  ],
  webpackFinal: async config => {
    // do mutation to the config

    return config;
  },
};
