const path = require('path');
const serve = require('webpack-serve');
const exampleConfig = require('./webpack.example')();

serve({
  config: exampleConfig,
  content: './online'
});