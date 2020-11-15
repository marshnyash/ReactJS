const path = require("path");
const { merge } = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");
const commonConfig = require("./webpack.config.common");

module.exports = merge(commonConfig, {
  name: "server",
  target: "node",
  entry: {
    main: path.resolve(__dirname, "./src/serverRenderer.tsx"),
  },
  externals: [nodeExternals()],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
});
