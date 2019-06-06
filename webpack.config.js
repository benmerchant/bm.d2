const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// use mini-css-extract-plugin in prod
// doesn't like sending the <title> to the template, it is possibel
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main_bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.join(__dirname,'src/index.html')
  })]
};
