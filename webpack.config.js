const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
  watch: false,
  entry: './__tests__/fixtures/two-things.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: path.resolve(__dirname, 'loader.js'),
      }
    ]
  },
  plugins: [
    new CaseSensitivePathsPlugin(),
    new webpack.NamedModulesPlugin(),
    new ProgressBarPlugin(),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: ['node_modules'],
  },
};
