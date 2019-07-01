module.exports = {
  baseUrl: "./",
  productionSourceMap: false,
  configureWebpack: {
    devtool: "source-map"
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/partials/_variables.scss";
          @import "@/styles/partials/_mixins.scss";
          @import "@/styles/partials/_grid.scss";
        `
      },
      css: {
        sourceMap: true
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule("captions")
      .test(/\.vtt$/)
      .use("url-loader")
      .loader("file-loader");
  }
};
