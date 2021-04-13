// Webpack config shared by production and development environment s
const path = require('path')

module.exports = {
  context: path.resolve(__dirname, '../'),
  resolve: {
    alias: {
      '@SPA': path.resolve(__dirname, '../spa'),
      '@Components': path.resolve(__dirname, '../spa/components'),
      '@Layouts': path.resolve(__dirname, '../spa/layouts'),
      '@Routes': path.resolve(__dirname, '../spa/routes')
    }
  },
  entry: {
    app: './spa/index.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/env',
              '@babel/react'
            ]
          },
          plugins: [
            '@babel/plugin-transform-react-jsx',
            '@babel/plugin-proposal-class-properties'
          ]
        }
      },
      {
        test: /\.(sass|scss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../public'),
    publicPath: '/'
  }
}
