const path = require('path');

const pkg = require('./package.json');

module.exports = {
  version: pkg.version,
  require: [path.resolve(__dirname, 'src/docs/setup.js')],
  pagePerSection: true,
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/docs/doc_components/Wrapper.js'),
  },
  sections: [
    {
      name: 'Guide',
      sections: [
        {
          name: 'Introduction',
          content: 'src/docs/introduction.md',
        },
        {
          name: 'Installation',
          content: 'src/docs/installation.md',
        },
      ],
    },
    {
      name: 'UI Components',
      content: 'src/components/components.md',
      components: ['src/components/**/*.js'],
      ignore: ['src/components/**/index.js'],
      // exampleMode: 'expand',
      usageMode: 'expand',
      sectionDepth: 2,
    },
    {
      name: 'Design Tokens',
      components: ['src/tokens/**/*.js'],
    },
  ],
  context: {
    '_': 'lodash',
  },
}
