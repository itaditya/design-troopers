const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PeerDepsExternalsPlugin = require('peer-deps-externals-webpack-plugin');

const cssPlugin = new MiniCssExtractPlugin({
  filename: 'style.css',
});

module.exports = {
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'DesignTroopers',
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true // true outputs JSX tags
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use:  ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    cssPlugin,
    // new PeerDepsExternalsPlugin(),
    new CleanWebpackPlugin(),
  ],
  // optimization: {
  //   splitChunks: {
  //     // include all types of chunks
  //     chunks: 'all'
  //   },
  // },
};
