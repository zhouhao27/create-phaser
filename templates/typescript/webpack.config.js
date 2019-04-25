const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

var pathToPhaser = path.join(__dirname, '/node_modules/phaser/');
var phaser = path.join(pathToPhaser, 'dist/phaser.js');

module.exports = {
  devtool: 'source-map',
  entry: './src/game.ts',  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader', exclude: '/node_modules/' },
      { test: /phaser\.js$/, loader: 'expose-loader?Phaser' }
    ]
  },
  devServer: {
    port: 8080,
    open: true
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      phaser: phaser
    }
  },
  plugins: [
    new webpack.DefinePlugin({      
      'CANVAS_RENDERER': JSON.stringify(true),
      'WEBGL_RENDERER': JSON.stringify(true)
    }),
    new HtmlWebpackPlugin({
      template: './template/index.html',
      filename:'index.html'
    })
  ]
};
