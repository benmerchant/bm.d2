const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// use mini-css-extract-plugin in prod
// doesn't like sending the <title> to the template, it is possibel
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main_bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    // clean dist folder each build
    new CleanWebpackPlugin(),
    // generate index files
    new HtmlWebpackPlugin(
      {
        // use my template for generation
        template: path.join(__dirname,'src/index.html')
      }
    )
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // come back later and add mini-css for prod build
          // so that it isnt dependent on JS
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
};
