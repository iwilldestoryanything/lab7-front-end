const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './webpack-project/src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  stats: {
    children: true,
    errorDetails: true,
  },
  module: {
    rules: [
      
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
        ],
      },
      
      {
        test: /\.styl$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'stylus-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Index Page',
      template: path.resolve(__dirname, './webpack-project/src/pages/index.html'),
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Rozklad Page',
      template: path.resolve(__dirname, './webpack-project/src/pages/rozklad.html'),
      filename: 'rozklad.html',
    }),
    new HtmlWebpackPlugin({
      title: 'News Page',
      template: path.resolve(__dirname, './webpack-project/src/pages/news.html'),
      filename: 'news.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Photo Page',
      template: path.resolve(__dirname, './webpack-project/src/pages/photo.html'),
      filename: 'photo.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
  ],
};
