/* eslint-disable */
var webpack = require('webpack');

module.exports = (env) => {
  const debug = !env.production;
  return {
    devtool: debug ? 'inline-source-map' : false,
    entry: {
      app: __dirname + '/index.js'
    },
    module: {
      rules: [{
          test: /\.jsx?$/,
          use: {
            loader: 'babel-loader',
            query: {
              presets: ['es2015']
            }
          },
          exclude: /node_modules/,
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            plugins: [
              ['react-transform', {
                transforms: [{
                  transform: 'react-transform-hmr',
                  imports: ['react'],
                  locals: ['module']
                }]
              }]
            ]
          }
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loader: 'url-loader?limit=80000&name=[name].[ext]'
        },
      ]
    },
    output: {
      path: __dirname + '/build/',
      filename: '[name].js',
      publicPath: '/build/'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': '"development"'
        }
      }),
      // new webpack.NoErrorsPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
      contentBase: __dirname,
      historyApiFallback: true,
      hot: true,
      inline: true,
      port: 8000,
      progress: true,
      stats: {
        cached: false
      }
    }
  }
}
