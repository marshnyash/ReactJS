const dev = require('./webpack.config.dev');
const prod = require('./webpack.config.prod');

module.exports = process.env.NODE_ENV === 'production' ? prod : dev;