const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StringReplacePlugin = require('string-replace-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = [
  {
    context: join(process.cwd(), 'src', 'app'),
    entry: './index',
    output: {
      path: join(process.cwd(), 'dist', 'public'),
      filename: '[name].[chunkhash].js'
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx']
    },
    module: {
      loaders: [
        { test: /\.tsx?$/, exclude: /node_modules/, use: ['ts-loader'] },
        {
          test: /ionic.js$/,
          loader: StringReplacePlugin.replace({
            replacements: [{ pattern: /\/build\/ionic/ig, replacement: () => '/public/ionic' }]
          })
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: join(process.cwd(), 'src', 'index.html'),
        filename: join(process.cwd(), 'dist', 'index.html'),
        minify: {
          removeComments: true,
          preserveLineBreaks: false
        }
      }),
      new StringReplacePlugin(),
      new CleanWebpackPlugin([
        join(process.cwd(), 'dist', '*.html'),
        join(process.cwd(), 'dist', '*.js'),
        join(process.cwd(), 'dist', 'public', '*.js')
      ])
    ]
  },
  {
    context: join(process.cwd(), 'src', 'server'),
    entry: './server',
    output: {
      path: join(process.cwd(), 'dist'),
      filename: 'server.js'
    },
    target: 'node',
    externals: [nodeExternals()],
    resolve: {
      extensions: ['.js', '.ts', '.tsx']
    },
    module: {
      loaders: [
        { test: /\.tsx?$/, exclude: /node_modules/, use: ['ts-loader'] }
      ]
    },
    plugins: []
  }
];
