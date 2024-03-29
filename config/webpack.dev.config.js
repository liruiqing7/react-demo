const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    static: path.join(__dirname, '../src'),
    port: 9000,
    compress: true,
    proxy: {
      '/': {
        target: 'https://wx.hycs.test.zkfc.cn/',
        changeOrigin: true
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react'
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: 'body',
      hash: false
    })
  ]
});
