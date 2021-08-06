const path = require('path')

module.exports = {
  entry: './src/tools/search.js',
  output: {
    filename: 'search.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
}
