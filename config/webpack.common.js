const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

/*
 * Configuration variables
 */

const entry = './src/index.js';

// * OutPut build configuration
const output = {
  path: path.resolve(__dirname, '..', 'build'),
  filename: 'static/js/[name].[contenthash].js',
  publicPath: '',
};

// * Rules for JS and Assets
const rules = [
  {
    use: 'babel-loader',
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
  },
  {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    loader: 'file-loader',
    options: {
      name: 'static/images/[contenthash].[ext]',
    },
  },
  {
    test: /\.(eot|woff|ttf)\w*/,
    loader: 'file-loader',
    options: {
      name: 'static/fonts/[contenthash].[ext]',
    },
  },
];

/** @type {import('webpack').Configuration}  */
module.exports = {
  stats: { errorDetails: true, children: true },
  entry,
  output,
  module: {
    rules,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
