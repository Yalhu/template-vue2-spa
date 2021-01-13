const path = require("path");

function resolve(dir) {
    return path.join(__dirname, dir);
}
// const parse = require('url-parse');

// const webpackConfig = {
module.exports = {
    // 指定部署在域名的路径
    publicPath: process.env.VUE_APP_PUBLIC_PATH,
    outputDir: process.env.VUE_APP_OUTPUT_DIR,
    // 静态资源存放目录
    assetsDir: "./static",
    // 是否在保存时检测代码格式
    lintOnSave: process.env.NODE_ENV === "development",
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: process.env.NODE_ENV !== "production",
    // 设置跨域代理，编译结束自动打开浏览器
    devServer: {
        open: true,
        host: "0.0.0.0",
        disableHostCheck: true,
        proxy: {
            "/api": {
                target: "http://dev-api.xxxx.com/api/",
                // ws: true,
                changeOrigin: true
            }
        },
        overlay: {
            warnings: false,
            errors: true
        }
        // before: require("./mock/mock-server.js")
        // before: function (app) {
        //   pagesConfig.MOCK_LIST.forEach(urlStr => {
        //     const segments = parse('http://' + urlStr)
        //     const pathname = segments.pathname
        //     const host = segments.host

    //     app.get(pathname, function (req, res) {
    //       res.json(require('./mock/' + host + pathname + '.json'))
    //     })
    //   })
    // }
    },
    configureWebpack: config => {
        const newConfig = {
            devtool: process.env.NODE_ENV === "production" ? "false" : "source-map",
            resolve: {
                extensions: [".less"],
                alias: {
                    "@assets": resolve("src/assets"),
                    "@api": resolve("src/api"),
                    "@mockData": resolve("src/mockData"),
                    "@views": resolve("src/views"),
                    "@comp": resolve("src/components"),
                    "@utils": resolve("src/utils")
                }
            },
            // 忽略打包。需在html中引入（cdn）资源库链接
            // exports: {
            //   "vue": "Vue",
            //   "vue-router": "VueRouter",
            //   "element-ui": "Element",
            //   "lodash": "_",
            //   "ali-oss": "OSS",
            //   "jquery": "$"
            // }
        };
        if (process.env.npm_config_measure) {
            const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
            const smp = new SpeedMeasurePlugin({
                outputFormat: "human"
            });
            smp.wrap(newConfig);
        }
        return newConfig;
    },

    chainWebpack(config) {
        if (["DEVx", "STAGE", "ONLINE"].includes(process.env.VUE_APP_BUILD_ENV)) {
            config.optimization
              .minimizer('terser')
                .tap((args) => {
                  args[0].terserOptions.ecma = 8
                  args[0].terserOptions.compress.drop_console = true
                  args[0].terserOptions.compress.drop_debugger = true
                  args[0].terserOptions.compress.pure_funcs = ['console.log']
                  args[0].terserOptions.output = {
                      comments: false
                  };
                  return args
                }
            );

            const productionGzipExtensions = ["js", "css"];
            config.plugin("CompressionWebpackPlugin")
                .use(new (require("compression-webpack-plugin"))({
                    filename: "[path].gz[query]", // 压缩后的文件策略
                    algorithm: "gzip", // 压缩方式
                    test: new RegExp(`\\.(${productionGzipExtensions.join("|")})$`), // 可设置需要压缩的文件类型
                    threshold: 8192, // 大于8kb的文件启用压缩
                    minRatio: 0.8 // 压缩比率大于等于0.8时不进行压缩
                }));

            const ContextReplacementPlugin = require("webpack/lib/ContextReplacementPlugin");
            config.plugin("ignore").use(new ContextReplacementPlugin(/moment[/\\]locale$/, /zh-CN$/));
        }

        // set preserveWhitespace
        config.module
            .rule("vue")
            .use("vue-loader")
            .loader("vue-loader")
            .tap(options => {
                options.compilerOptions.preserveWhitespace = true;
                return options;
            })
            .end();

        config
        // https://webpack.js.org/configuration/devtool/#development
            .when(process.env.NODE_ENV === "development",
                config => config.devtool("cheap-source-map")
            );

        config
            .when(process.env.NODE_ENV !== "development",
                config => {
                    config
                        .plugin("ScriptExtHtmlWebpackPlugin")
                        .after("html")
                        .use("script-ext-html-webpack-plugin", [{
                            // `runtime` must same as runtimeChunk name. default is `runtime`
                            inline: /runtime\..*\.js$/
                        }])
                        .end();
                    config
                        .optimization.splitChunks({
                            chunks: "all",
                            cacheGroups: {
                                libs: {
                                    name: "chunk-libs",
                                    test: /[\\/]node_modules[\\/]/,
                                    priority: 10,
                                    chunks: "initial" // only package third parties that are initially dependent
                                },
                                elementUI: {
                                    name: "chunk-elementUI", // split elementUI into a single package
                                    priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                                    test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
                                },
                                commons: {
                                    name: "chunk-commons",
                                    test: resolve("src/components"), // can customize your rules
                                    minChunks: 3, //  minimum common number
                                    priority: 5,
                                    reuseExistingChunk: true
                                }
                            }
                        });
                    config.optimization.runtimeChunk("single");
                }
            );
    },
    parallel: require("os").cpus().length > 1
};
