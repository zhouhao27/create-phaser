const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

const appPath = path.join(__dirname, './src')
const modulePath = path.join(__dirname, './node_modules')

module.exports = {
  devtool: 'source-map',
  entry: {
    bundle: './src/index.js',
    vendor: ['phaser']
  },
  resolve: {
    modules:[
      modulePath,
      appPath
    ]
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
  },
  module: {
    rules:[
      {
        test: /\.js$/,
        // loader: 'babel-loader',
        include: appPath,
        exclude: modulePath,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": ["@babel/preset-env"]
          }
        }
      }
    ]
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
  ],
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'all'
    }
  },
  devServer: {
    port: 9000
  }
}
