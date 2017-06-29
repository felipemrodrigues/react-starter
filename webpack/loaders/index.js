const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = config => {
  config.module = {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [
            ['env', {
              targets: {
                browsers: ['last 2 versions'],
                uglify: true
              },
              modules: false,
              useBuiltIns: true
            }],
            'stage-2',
            'react'
          ],
          plugins: [
            'transform-export-extensions'
          ]
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader?sourceMap=true', use: 'css-loader?sourceMap=true!sass-loader' })
      },
      {
        test: /\.(jpe?g|gif|png|svg|woff|ttf|)$/,
        loader: "file-loader"
      }
    ]
  };

  return config;
};
