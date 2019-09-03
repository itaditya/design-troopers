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
      components: ['src/components/**/index.js', 'src/components/*.js'],
      usageMode: 'expand',
      sectionDepth: 2,
    },
    {
      name: 'Design Tokens',
      components: ['src/tokens/**/*.js'],
    },
    {
      name: 'Icons',
      sections: [
        {
          name: 'Usage',
          content: 'src/icons/usage.md',
          exampleMode: 'expand',
        },
        {
          name: 'Collection',
          content: 'src/icons/collection.md',
        },
      ],
    },
  ],
  context: {
    '_': 'lodash',
  },
}
