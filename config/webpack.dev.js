const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

/** @type {import('webpack').Configuration}  */
const devConfig = {
  mode: 'development',

  stats: {
    errorDetails: true,
  },

  devServer: {
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    client: {
      overlay: true,
    },
  },

  target: 'web',
  plugins: [new ReactRefreshWebpackPlugin()],
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        use: ['style-loader', 'css-loader', 'sass-loader'],
        test: /\.(css|sass|scss)$/,
      },
    ],
  },
};

module.exports = merge(commonConfig, devConfig);
