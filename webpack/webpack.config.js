const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');



module.exports = {
  entry: {
    server: './src/main.server.ts',
    client: './src/main.client.ts'
  },
  target: 'node',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
        exclude: [/node_modules/, /\.(spec|e2e)\.ts$/]
      }, 
      {test: /\.html$/, loader: 'html-loader'}
    ]
  },
  plugins: [
    new WebpackNotifierPlugin({title: 'Angular files reloaded!!!'}),
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      path.resolve('./src'),
      {}
    ),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CopyWebpackPlugin([
      {
        from: 'src/assets', to: 'assets'
      }
    ])
  ],
  resolve: {
    extensions: ['.js', '.ts', '.html']
  }
};
