const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(commonConfig, {
  mode: 'production',
  output: {
    filename: `[name].[hash].js`,
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: './index.html',
      minify: {
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true
    }
    }),
  ],
})