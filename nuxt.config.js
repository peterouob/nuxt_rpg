import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
const CompressionPlugin = require("compression-webpack-plugin");
export default defineNuxtConfig({
  //...
  image: {
    cloudflare: {
      baseURL: "https://rpg-nuxt-app.hellolinpeter.workers.dev",
    },
  },
  build: { 
    collapseBooleanAttributes: true,
   collapseWhitespace: false,
   decodeEntities: true,
   minifyCSS: true,
   minifyJS: true,
   processConditionalComments: true, 
   removeAttributeQuotes: false,
   removeComments: false,
   removeEmptyAttributes: true, 
   removeOptionalTags: false,
   removeRedundantAttributes: true,
   removeScriptTypeAttributes: false,   
   removeStyleLinkTypeAttributes: false,
   removeTagWhitespace: false,
   sortClassName: false,
   trimCustomFragments: true,
   useShortDoctype: true ,
    plugins: [
      new CompressionPlugin({
        test: /\.js$|\.vue$|\.html/, // 匹配文件名
        threshold: 10240, // 对超过10kb的数据进行压缩
        deleteOriginalAssets: false, // 是否删除原文件
      }),
    ],
    optimization: {
      minimize: true,
      splitChunks: {
        chunks: "all",
        automaticNameDelimiter: ".",
        name: true,
        minSize: 10000,
        maxSize: 244000,
        cacheGroups: {
          vendor: {
            name: "node_vendors",
            test: /[\\/]node_modules[\\/]/,
            chunks: "all",
            maxSize: 244000,
          },
          styles: {
            name: "styles",
            test: /\.(css|vue)$/,
            chunks: "all",
            enforce: true,
          },
          commons: {
            test: /node_modules[\\/](vue|vue-loader|vue-router|vuex|vue-meta|core-js|@babel\/runtime|axios|webpack|setimmediate|timers-browserify|process|regenerator-runtime|cookie|js-cookie|is-buffer|dotprop|nuxt\.js)[\\/]/,
            chunks: "all",
            priority: 10,
            name: true,
          },
        },
      },
    },
    transpile: ["vuetify", "vue-barcode-reader"],
  },
  nitro: {
    preset: "cloudflare", // 預設為 node-server
  },
  nuxtPrecompress: {
    gzip: {
      enabled: true,
      filename: "[path].gz[query]",
      threshold: 10240,
      minRatio: 0.8,
      compressionOptions: { level: 9 },
    },
    brotli: {
      enabled: true,
      filename: "[path].br[query]",
      compressionOptions: { level: 11 },
      threshold: 10240,
      minRatio: 0.8,
    },
    enabled: true,
    report: false,
    test: /\.(js|css|html|txt|xml|svg)$/,
    // Serving options
    middleware: {
      enabled: true,
      enabledStatic: true,
      encodingsPriority: ["br", "gzip"],
    },
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
