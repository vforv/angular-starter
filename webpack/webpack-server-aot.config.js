const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    server: './src/main.server-aot.ts'
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
        test: /\.ts$/, loader: 'ts-loader',
        query: {
          // Use this to point to your tsconfig.json.
          configFileName: '../tsconfig-server-aot.json'
        }
      }
    ]
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      path.resolve('./src'),
      {}
    )
  ],
  resolve: {
    extensions: ['.js', '.ts']
  }
};
