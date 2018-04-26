const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'dist');

module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: BUILD_DIR,
    },
    module: {
        rules: [{
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['eslint-loader'],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react'],
            "env": {
              "production": {
                "presets": ["minify"]
              }
            },
            plugins: ['styled-jsx/babel', 
              'transform-class-properties', 
              'transform-object-rest-spread', 
              'transform-async-to-generator', 
              'lodash',
            ],
          },
        }],
      },
};
  