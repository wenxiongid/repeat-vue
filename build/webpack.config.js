var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
var sourcePath = path.resolve(__dirname, '../src')

module.exports = {
  output: {
    path: sourcePath,
    filename: "js/[name].bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(sourcePath, 'index.tpl.html'),
      filename: './index.html',
      inject: 'body',
      hash: false
    }),
  ],
  devServer: {
    contentBase: sourcePath,
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 3000
  },
  stats: {
    colors: true
  }
}