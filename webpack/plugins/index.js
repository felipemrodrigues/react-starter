const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const uglifyConfig = require('./uglify.config');
const eslintConfig = require('./eslint.config');

module.exports = (config, { isProd, isAnalyzer }) => {
  config.plugins = [
    new HtmlWebpackPlugin({
      template: './app/markup/index.html'
    })
  ];

  if (isProd) {
    config.plugins.push(
      new webpack.optimize.UglifyJsPlugin(uglifyConfig)
    );

    config.plugins.push(
      new webpack.LoaderOptionsPlugin(eslintConfig)
    );
  }

  if (isAnalyzer) {
    config.plugins.push(
      new BundleAnalyzerPlugin()
    );
  }

  return config;
};
