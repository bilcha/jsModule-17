const path = require('path')

module.exports = {
  
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" 
          }, {
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }]
      },
        {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /(\.tpl|\.html)$/,
        loader: 'lodash-template-webpack',
      }
    ],

  }
}