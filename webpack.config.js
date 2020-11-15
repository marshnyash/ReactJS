const dev = require("./webpack.config.dev");
const prod = require("./webpack.config.prod");
const server = require("./webpack.config.server");

module.exports =
  process.env.NODE_ENV === "production" ? [prod, server] : [dev, server];
