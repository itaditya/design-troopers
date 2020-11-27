module.exports = {
  reactOptions: {
    fastRefresh: true,
    strictMode: true,
  },
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
