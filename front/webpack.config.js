const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: path.resolve('dist/'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './dist'),
    inline: true,
    port: 8080,
    host: '0.0.0.0',
  }
}
