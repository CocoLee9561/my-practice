const path = require('path');

/*
 * @Author: lijing
 * @Date: 2021-09-26 16:10:44
 * @Description: 
 */
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: './js/[name].js'
  },
  devServer: {    
    // contentBase: './public',
    // inline: true
  }
}
