const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const uglifyConfig = require('./uglify.config');

module.exports = (config, { isProd, isAnalyzer }) => {
  config.plugins = [
    new HtmlWebpackPlugin({
      template: './app/markup/index.html'
    })
  ];

  config.plugins.push(
    new ExtractTextPlugin({ filename: 'styles/default.css', allChunks: true })
  );

  if (isProd) {
    config.plugins.push(
      new webpack.optimize.UglifyJsPlugin(uglifyConfig)
    );
  }

  if (isAnalyzer) {
    config.plugins.push(
      new BundleAnalyzerPlugin()
    );
  }

  return config;
};
