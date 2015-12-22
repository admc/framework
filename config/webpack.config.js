module.exports = {
  entry: './src/app/index.js',
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
  },
   module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
