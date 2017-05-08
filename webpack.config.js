var webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.client.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.ts$/, loader: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts']
  }
};
