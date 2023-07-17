//require('dotenv').config()
const path = require('path');
const Dotenv = require('dotenv-webpack');


// new webpack.EnvironmentPlugin({
//   NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
//   DEBUG: false,
// });

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new Dotenv(),
  ],

    mode: 'development',

};