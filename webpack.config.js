const path = require('path')

module.exports = {
  entry: './src/public/search.js',
  output: {
    filename: 'bundledSearch.js',
    path: path.resolve(__dirname, 'dist/public'),
  },
  mode: 'development',
}
