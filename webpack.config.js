const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = [
  {
    context: join(process.cwd(), 'src', 'app'),
    entry: './index',
    output: {
      path: join(process.cwd(), 'dist', 'public'),
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx']
    },
    module: {
      loaders: [
        { test: /\.tsx?$/, exclude: /node_modules/, use: ['ts-loader'] }
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
      })
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
