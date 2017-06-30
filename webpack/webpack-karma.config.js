const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  target: 'node',
  module: {
    loaders: [
      {
        test: /\.ts$/, loaders: ['ts-loader', 'angular2-template-loader']
      },
      {test: /\.html$/, loader: 'html-loader'},
      {
        test: /\.css$/, loaders: ['to-string-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
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
