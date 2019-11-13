var webpack = require('webpack');

module.exports = {
  entry: {
    path: './src/main.js'
  },
  output: {
    path: __dirname+'/public',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
      test: /\.css$/,  
      include: /node_modules/,  
          use: [
              'style-loader',
                  {
                    loader: 'css-loader',
                    options: {
                      modules: true,
                    },
                  },
                ],
 }
    ]
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './public',
    inline: true
  }
}
