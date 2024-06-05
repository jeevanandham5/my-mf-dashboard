//webpackconfig.js dashboard
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const isProduction = process.env.NODE_ENV === "production";
module.exports = {
  entry: "./src/index.js",
  mode: isProduction ? "production" : "development",
  devServer: {
    static: path.join(__dirname, "public"),
    port: 3002,
    historyApiFallback: true,
  },
  output: {
    publicPath: "auto",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]__[hash:base64:2]",
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "dashboard",
      filename: "remoteEntry.js",
      exposes: {
        "./DashboardApp": "./src/App",
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: require("./package.json").dependencies.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: require("./package.json").dependencies["react-dom"],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
