const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  entry: {
    client: './src/main.client-aot.ts'
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
        test: /\.ts$/, loader: 'ts-loader', query: {
          // Use this to point to your tsconfig.json.
          configFileName: '../tsconfig-client-aot.json'
        }
      }
    ]
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      path.resolve('../src'),
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
