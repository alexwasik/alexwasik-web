/** @type {import('next').NextConfig} */
const withLess = require("next-with-less");
const path = require("path");

const pathToLessFileWithVariables = path.resolve(
  "styles/baseStyles.less"
);


module.exports = withLess({
  reactStrictMode: true,
  lessLoaderOptions: {
    lessOptions: {
      // modifyVars: {
      //   "primary-color": "#000000"
      // },
    },
    additionalData: (content) => `${content}\n\n@import "${pathToLessFileWithVariables}";`
  },
  images: {
    domains: ["cdn-images-1.medium.com"],
  },
  webpack: (config) => {
    // load worker files as a urls with `file-loader`
    config.module.rules.unshift({
      test: /pdf\.worker\.(min\.)?js/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[contenthash].[ext]",
            publicPath: "_next/static/worker",
            outputPath: "static/worker"
          }
        }
      ]
    });

    return config;
  }
});
