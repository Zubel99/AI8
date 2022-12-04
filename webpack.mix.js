// webpack.mix.js

let mix = require('laravel-mix');

mix
.js('src/app.ts', 'dist')
.webpackConfig({
  module: {
    rules: [
      {
        test: /.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".vue", ".ts", ".tsx"]
  }
})