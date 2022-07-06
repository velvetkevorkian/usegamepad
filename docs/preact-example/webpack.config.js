const HtmlWebpackPlugin = require ("html-webpack-plugin")

module.exports =  {
  entry: "./index.tsx",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({title: 'Preact demo'}),
  ],
  devServer: {
    static: "./dist",
    port: 3001,
  },
}
