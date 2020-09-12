const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: path.resolve(__dirname, './src/index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@models': path.resolve(__dirname, 'src/models'),
      '@path': path.resolve(__dirname, 'src'),
    },
    modules: [path.resolve(__dirname), 'node_modules'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [ 
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: 'file-loader',
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: 'file-loader',
      },
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  }
}