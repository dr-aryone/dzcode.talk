const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");

const VENDOR_LIBS = ["babel-polyfill", "redux", "react-redux", "react-dom"];

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const APP_DIR = path.resolve(__dirname, "../src");

module.exports = env => {
  const { PLATFORM, VERSION } = env;
  return merge([
    {
      entry: {
        "@babel/polyfill": APP_DIR,
        // firstComp: "./resources/assets/js/firstComp/firstComp.js",
        // regularJS: "./resources/assets/js/regularJS.js",
        vendor: VENDOR_LIBS
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
              {
                loader: "babel-loader",
                options: {
                  // presets: [["es2019", { modules: false }], "stage-0", "react"]
                }
              }
            ]
          },
          {
            test: /\.scss$/,
            use: [
              PLATFORM === "production"
                ? MiniCssExtractPlugin.loader
                : "style-loader",
              {
                loader: "css-loader",
                options: {
                  sourceMap: true
                }
              },
              {
                loader: "sass-loader",
                options: {
                  sourceMap: true
                }
              }
            ]
          }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: "./src/index.html",
          filename: "./index.html"
        }),
        new webpack.DefinePlugin({
          "process.env.VERSION": JSON.stringify(env.VERSION),
          "process.env.PLATFORM": JSON.stringify(env.PLATFORM)
        }),
        new CopyWebpackPlugin([{ from: "src/static" }]),
        new webpack.optimize.CommonsChunkPlugin({
          name: "vendor",
          minChunks(module) {
            // this assumes your vendor imports exist in the node_modules directory
            return (
              module.context && module.context.indexOf("node_modules") !== -1
            );
          }
        }),
        new webpack.optimize.UglifyJsPlugin({
          sourceMap: true
          // options.devtool &&
          // (options.devtool.indexOf("sourcemap") >= 0 ||
          //   options.devtool.indexOf("source-map") >= 0)
        })
        // ,new webpack.Define(),
        // new webpack.optimize.CommonsChunkPlugin({
        //   name: "manifest"
        // But since there are no more common modules between
        // them we end up with just the runtime code included in the manifest file
        // })
      ]
      // ,output: {
      //   filename: '[name].bundle.js',
      //   chunkFilename: '[name].chunk.bundle.js',
      //   path: path.resolve(__dirname, '..', 'dist'),
      //   publicPath: '/',
      // },
    }
  ]);
};
