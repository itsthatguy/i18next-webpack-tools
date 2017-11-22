import { resolve } from 'path';
import * as webpack from 'webpack';
import * as merge from 'webpack-merge';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import { I18nJsonTransformPlugin, languages } from './src/';
import * as CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';
import * as ProgressBarPlugin from 'progress-bar-webpack-plugin';

const LANGUAGES = languages();

declare var process;
declare var __dirname;

const app = {
  devtool: 'cheap-module-eval-source-map',
  entry: './__tests__/fixtures/index.tsx',
  output: {
    publicPath: '/',
    path: resolve(__dirname, 'dist', 'app'),
    filename: '[name].js',
    sourceMapFilename: '[file].map',
  },
  devServer: {
    compress: true,
    historyApiFallback: {
      disableDotRule: true,
    },
    inline: true,
    port: 3001,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: resolve(__dirname, './src/i18n-json-webpack-loader.ts'),
          options: {
            translationFunction: 't'
          }
        }
      },
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'awesome-typescript-loader'],
        exclude: [/(node_modules)/],
      },
    ]
  },
  plugins: [
    new CaseSensitivePathsPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: '__tests__/fixtures/index.html',
      inject: true,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV:
          process.env.NODE_ENV === 'production'
            ? JSON.stringify('production')
            : JSON.stringify('development'),
        LANGUAGES: JSON.stringify(LANGUAGES)
      },
    }),
    new I18nJsonTransformPlugin(),
    new ProgressBarPlugin(),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: ['./__tests__/fixtures/', 'node_modules/'],
  }
};

export default app;
