const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.base.config.js');
const setupProxy = require('./setupProxy')

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { cssLoader, lessLoader, nodeModulesStyleHandle } = require('./styleHandleBase')

module.exports = merge(common, {
  mode: 'development',
  output: {
    publicPath: '/',
    filename: 'js/[name].[hash:8].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        exclude:[/node_modules/],
        use: [ 
          'style-loader', // 开发环境css文件没必要单独打包（故：MiniCssExtractPlugin.loader -> style-loader ）
          cssLoader,
          lessLoader
        ]
      },
      // 单独处理node_modules中antd的样式
      nodeModulesStyleHandle
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    historyApiFallback: true,    // 当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html
    // host: process.env.HOST || '0.0.0.0',
    open: true,
    port: 8000,
    compress: true,
    hot: true,
    proxy: setupProxy
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: 'body',
      hash: false
    }),
    /* HotModuleReplacementPlugin是webpack热更新的插件，设置devServer.hot为true，
    并且在plugins中引入HotModuleReplacementPlugin插件即可。
    还需要注意的是我们开启了hot，那么导出不能使用chunkhash，需要替换为hash。
    */
    new webpack.HotModuleReplacementPlugin()
  ]
});