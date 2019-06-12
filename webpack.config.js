const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// use mini-css-extract-plugin in prod
// doesn't like sending the <title> to the template, it is possibel
module.exports = {
  mode: 'development',
  entry: './src/app/base.module.js',
  output: {filename: 'main_bundle.js',path: path.resolve(__dirname, 'dist')},
  plugins: [
    // clean dist folder each build
    new CleanWebpackPlugin(),
    // generate index files
    new HtmlWebpackPlugin(
      {// use my template for generation
        template: path.join(__dirname,'src/index.html'),
        favicon: path.resolve(__dirname, 'src/imgs/logo_gray_knockout.ico')
      }
    )
  ],
  module: {
    rules: [
      { // come back later and add mini-css for prod build so that it isnt dependent on JS
        test: /\.scss$/,
        use:[ 'style-loader','css-loader','sass-loader']
      },{test: /\.(png|svg|jpg|gif)/,use: ['file-loader']},
      {
        test: /\.html$/,
        exclude: [
          path.resolve(__dirname, './node_modules'),
          path.resolve(__dirname, './src/index.html')
        ],
        use:[
          {
            loader:'ngtemplate-loader',
            options: {relativeTo: (path.resolve(__dirname, './src/app'))}
          },
          {
            loader: 'html-loader',
            options: {
              root: path.resolve(__dirname, './src/imgs'),
              attrs: ['img:src', 'link:href']
            }
          }
        ]

      }
    ]
  }
};
