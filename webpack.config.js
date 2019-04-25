const path = require('path');
const HWP = require('html-webpack-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BUILD_DIR = path.resolve(__dirname, 'build');
const SRC_DIR = path.resolve(__dirname, 'src');

console.log('BUILD_DIR', BUILD_DIR);
console.log('SRC_DIR', SRC_DIR);

module.exports = (env = {}) => ({
  entry: {
    index: [`${SRC_DIR}/index.js`],
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].bundle.js',
    crossOriginLoading: false
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }, {
      test: /\.html$/,
      loader: 'html-loader',
    },
    {
      test: /\.(sa|sc|c)ss$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader'
        },
        'sass-loader'
      ],
    },
    {
      test: /\.(png|jpg|jpeg|gif|ico)$/,
      use: [
        {
          // loader: 'url-loader'
          loader: 'file-loader',
          options: {
            name: './img/[name].[hash].[ext]',
          },
        },
      ],
    },
    {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader',
      options: {
        name: './fonts/[name].[hash].[ext]',
      },
    }
    ]
  },
  optimization: {
    runtimeChunk: false,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      })
    ]
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin({
    //   multiStep: true,
    // }),
    // new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
    }),
    new CopyWebpackPlugin(
      [
        { from: './public/img', to: 'img' },
      ],
      { copyUnmodified: false }
    ),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
})