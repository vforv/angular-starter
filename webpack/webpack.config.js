const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

const fs = require('fs');
const nodeModules = {};

// note the path.resolve(__dirname, ...) part
// without it, eslint-import-resolver-webpack fails
// since eslint might be invoked with different cwd

fs.readdirSync(path.resolve(__dirname, '../node_modules'))
    .filter(x => ['.bin'].indexOf(x) === -1)
    .forEach(mod => { nodeModules[mod] = `commonjs ${mod}`; });

module.exports = [
 {
   entry: {
    server: './src/main.server.ts'
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
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
        exclude: [/node_modules/, /\.(spec|e2e)\.ts$/]
      }, 
      {test: /\.html$/, loader: 'html-loader'},
      {
        test: /\.css$/, loaders: ['to-string-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new WebpackNotifierPlugin({title: 'Angular SERVER files reloaded!!!', alwaysNotify: true}),
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      path.resolve('./src'),
      {}
    )
    
  ],
  resolve: {
    extensions: ['.js', '.ts', '.html']
  }
},{
 entry: {
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
      {test: /\.html$/, loader: 'html-loader'},
      {
        test: /\.css$/, loaders: ['to-string-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new WebpackNotifierPlugin({title: 'Angular CLIENT files reloaded!!!', alwaysNotify: true}),
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
}];
