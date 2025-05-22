const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Điểm bắt đầu
  output: {
    path: path.resolve(__dirname, 'dist'), // Thư mục đầu ra
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html' 
    })
  ]
};