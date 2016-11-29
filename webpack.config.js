var webpack = require('webpack'),
  extractPlugin = require('extract-text-webpack-plugin'),

  deps = require('./package.json'),

  env = process.env.NODE_ENV,
  isDev = env == 'dev';

module.exports = {
  entry: {
    app: './src/index.js',
    libs: Object.keys(deps.dependencies)
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: /src/,
        loader: 'babel'
      } ,
      {
        test: /\.scss$/,
        include: /src/,
        loader: extractPlugin.extract('css!sass')
      }
    ]
  },
  plugins: [
    !isDev && (new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: isDev }
    })),

    isDev && new webpack.HotModuleReplacementPlugin(),

    new webpack.NoErrorsPlugin(),
    new extractPlugin('[name].css'),
    new webpack.optimize.CommonsChunkPlugin('libs', null, 2),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    })
  ].filter(function(item) { return !!item }),
  output: {
    publicPath: '/dist/',
    path: './dist',
    filename: '[name].js'
  },
  devServer: isDev && {
    inline: true,
    hot: true,
    host: 'localhost',
    port: 8080
  }
};
