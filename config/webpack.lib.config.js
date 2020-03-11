const merge = require('webpack-merge');
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');  // 这个插件不被 webpack 官方文档所收录

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const autoprefixer = require("autoprefixer")

const { cssLoader, lessLoader, nodeModulesStyleHandle } = require('./styleHandleBase')

const components = {
  button: './src/components/button/index.js',
  list: './src/components/list/index.js',
  card: './src/components/card/index.js',
  '/': './src/components/index.js'
}

module.exports = {
  mode: 'none',
  entry: components,
  output: {
    path: path.resolve(__dirname, '../lib'),
    publicPath: '/',
    filename: path.posix.join('', '[name]/index.js'),
    // chunkFilename: path.posix.join('', '[name]/index.js'),
    libraryExport: "default",
    library: 'we',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    alias: {
      "@": path.resolve(__dirname, "../src/")
    }
  },
  // externals: {
  //   jquery: 'jQuery'
  // },
  // devtool: 'cheap-module-eval-source-map',  // 打包后打印对应源码文件
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(eot|ttf|svg|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'font/'
          }
        }
      },
      {
        test: /\.(jpg|png|gif)$/,   // 遇到以jpg,png,gif为后缀的文件，使用url-loader进行预处理
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',   // 输出的文件名为 原来的文件名.后缀
            outputPath: 'images/',  // 输出到dist目录下的路径
            limit: 8192,  // 如果这个图片文件大于8192b，即8kb，那我url-loader就不用，转而去使用file-loader，把图片正常打包成一个单独的图片文件到设置的目录下，若是小于了8kb，那好，我就将图片打包成base64的图片格式插入到bundle.js文件中，这样做的好处是，减少了http请求，但是如果文件过大，js文件也会过大，得不偿失
          }
        }
      },
      {
        test: /\.(css|less)$/,
        exclude:[/node_modules/],
        use: [ 
          // 'style-loader', 
          MiniCssExtractPlugin.loader,
          cssLoader,
          {
            loader: "postcss-loader",
            options: {
              plugins: () =>
                autoprefixer({        // 给样式加前缀，解决兼容性问题
                  overrideBrowserslist: ['last 5 version', '>1%', 'ie >=8']
                })
            }
          },
          lessLoader
        ]
      },
      // 单独处理node_modules中antd的样式
      nodeModulesStyleHandle
    ]
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',   // 为什么不是 '../public/index.html'，我的理解是无论与要用的template是不是在一个目录，都是从根路径开始查找
    //   template: 'public/index.html',
    //   inject: 'body',
    //   minify: {
    //     removeComments: true,
    //     collapseWhitespace: true,
    //   },
    // }),
    new CleanWebpackPlugin(),
    // style样式是通过style-loader预处理，插入到了head标签内，但是我们平常写样式的时候，一定是通过引入外部css文件进行样式引入的(配合rules中的MiniCssExtractPlugin.loader)，即拆分css文件打包
    new MiniCssExtractPlugin({
      filename: '[name]/index.css',
      // chunkFilename: 'index.css',
    }),
    // require('autoprefixer')
    // require('autoprefixer')({ overrideBrowserslist: ['last 5 version', '>1%', 'ie >=8'] })
  ],

  optimization: {
    minimizer: [
      // new UglifyJsPlugin({
      //   uglifyOptions: {
      //     compress: {
      //       warnings: false
      //     }
      //   },
      //   sourceMap: false,
      //   parallel: true
      // }), // 我们需要把打包生成的js文件尽可能压缩，以便减少文件体积，更快地被用户加载。
      // new OptimizeCssAssetsPlugin({  // 压缩打包出的CSS文件(这段配置也是可以放到 plugins 这个属性下进行配置的)
      //   assetNameRegExp:/\.css$/g,
      //   cssProcessor:require("cssnano"),
      //   cssProcessorPluginOptions:{
      //     preset:['default', { discardComments: { removeAll:true } }]  // discardComments:去除注释
      //   },
      //   canPrint:true  // 插件能够在console中打印信息，默认值是true
      // })
    ],
    // splitChunks: {
    //   chunks: 'all',
    //   minSize: 30000,
    //   maxSize: 0,
    //   minChunks: 1,
    //   cacheGroups: {   // cacheGroups对象，定义了需要被抽离的模块，对拆分的文件进行缓存配置,
    //     vendors: {   // 它的test设置为 /node_modules/ 表示只筛选从node_modules文件夹下引入的模块，所以所有第三方模块才会被拆分出来
    //       priority: -10,
    //       test: /node_modules/,
    //       name: "vendor",
    //       enforce: true,
    //     },
    //   }
    // }
  }
}