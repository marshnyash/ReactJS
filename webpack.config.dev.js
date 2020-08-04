const commonConfig = require('./webpack.config.common');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: 9000,
    hot: true,
    compress: true,
    open: true
  },
  output: {
    filename: `[name].js`,
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: './index.html',
    }),
  ],
})