module.exports = config => {
  config.module = {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          // eslint options (if necessary) 
        }
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
      }
    ]
  };

  return config;
};
