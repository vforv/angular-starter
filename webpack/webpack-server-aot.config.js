const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const nodeModules = {};

// note the path.resolve(__dirname, ...) part
// without it, eslint-import-resolver-webpack fails
// since eslint might be invoked with different cwd

fs.readdirSync(path.resolve(__dirname, '../node_modules'))
    .filter(x => ['.bin'].indexOf(x) === -1)
    .forEach(mod => { nodeModules[mod] = `commonjs ${mod}`; });

module.exports = {
  entry: {
    server: './src/main.server-aot.ts'
  },
  target: 'node',
  externals: nodeModules,
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
