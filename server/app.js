const express = require("express");

const app = express();

if (process.env.NODE_ENV === "development") {
  const webpack = require("webpack");
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackConfig = require("../webpack.config");
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler));
} else {
  const serverRenderer = require("../public/js/serverRenderer").default;
  app.use(express.static("public"));
  app.use(serverRenderer());
}

module.exports = app;
