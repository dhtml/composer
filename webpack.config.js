const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    forum: './js/src/forum/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'js/dist'),
    filename: '[name].js',
  },
  // Add loaders, plugins, etc. as needed
};
