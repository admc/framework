module.exports = {
  entry: './src/app/AppRoot.jsx',
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
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0', 'react']
        }
      }
    ]
  }
}
