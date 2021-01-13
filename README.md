
vue2.x 单页应用简易模板。
快速复制/开启项目。
打包配置都已优化。不论前后台页面。
没有针对移动端的特殊设置，设计初衷主要是针对后台简单/单页管理模版。
项目复杂可以修改/添加。

[模版demo](https://yalhu.github.io/template-vue2-spa/web)
## 介绍
1）默认使用element-ui;且css不参与打包，在入口html中引入.
  js 还是通过ES6方式使用。会单独打一个包
  可以自己更换版本（注意版本一致）
  <!-- 进过webapck打包的element （css）大小会小一些，但是影响不大 -->
2）默认使用vue-router
3）默认不使用vux进行状态管理
4）初始化了axios数据请求。
  简单配置。需要根据实际情况去修改，比如鉴权/token检验，错误异常处理，重复请求，mock/数据拦截
5）没有引入debug/log 工具函数
6) 添加stage，online两个<!-- 打包 -->环境

如果需要更换ui库，或者添加其他插件。需要自己处理。

其它：个人不习惯写尾`;`。在vue文件中可以看到，其他地方还是补全了的。
### feature
在vue-cli基础上的增进
#### 提交/代码 规范
1）添加了husky：commit 前格式化代码（vue，css）
也可以用其他工具<!-- standard-version ， commitizen ，semver -->
<!-- 
[standard-version](https://www.npmjs.com/package/standard-version)
A utility for versioning using semver and CHANGELOG generation powered by Conventional Commits.
[semver](https://cloud.tencent.com/developer/section/1490271) -->
2）eslint，stylelint 需要自己配置。或者不使用
#### 打包优化
0）externals可以自行设置，已注释。
1）添加了splitChunks，抽离elementui,lib,common
2）elementui 可全局引入，也可以按需使用打包。
如果npm包方式引入，排除了locale文件。（同理其他语言文件，比如moment）
3）添加了gzip压缩（服务端需设置）
4）terser 压缩js。css文件可自行配置
<!-- 5）添加了svg-sprite-loader，如需要可以打开 -->
5）添加了ScriptExtHtmlWebpackPlugin（功能未经测试）
<!-- [script-ext-html-webpack-plugin](https://www.npmjs.com/package/script-ext-html-webpack-plugin) -->

<!-- \##### vue-cli 特殊配置 -->
1）增加 --measure参数，查看打包时间
区别于`--report`和`--modern` 等 vue-cli (build) 配置参数


#### 已有配置
资源：url-loader/file-loader
css: post-css
svg: svg-sprite-loader
js: cache-loader,thread-loader,babel
...
其余可自行查看

#### 移动端可选
css：单位转换

### cli
```sh
## Project setup
npm install

### Compiles and hot-reloads for development
npm run serve  --measure

### Compiles and minifies for production
npm run build -- --report --modern
npm run build:online

### Lints and fixes files
npm run lint
npm run lintstyle

## 查看配置 
vue inspect > webpack.config.output.js
vue inspect --mode online > webpack.config.output.js
```


## NEXT
1. - [] 
2. - [] 加强组件/layout：增加header，footer，sidebar
4. - [] 加强路由：嵌套二级路由
<!-- 2. - [] babel 优化polyfill.貌似preset-env：useBuildIn: usaged 可配置 -->
3. - [] dll收益
4. - [] 增加移动端模版，或者选项
5. - [] 测试ScriptExtHtmlWebpackPlugin功能
6. - [] 添加mock-server

## vue-cli 原生
Customize configuration:  [Configuration Reference](https://cli.vuejs.org/config/).

### vue-cli-service serve
Usage: `vue-cli-service serve [options]`

Options:
--open 服务器启动时打开浏览器
--copy 将URL复制到服务器启动时的剪贴板 (直接到浏览器去粘贴就OK了 http://localhost:8080/)
--mode 指定环境模式 (默认: development)
--host host 地址 (default: 0.0.0.0)
--port 端口号 (default: 8080)
--https 使用https (default: false)


### vue-cli-service build
Usage: `vue-cli-service build [options] [entry|pattern]`
Options:

--mode 指定环境模式 (default: production)
--dest 指定输出目录 (default: dist)
--modern 构建两个版本的 js 包：一个面向支持现代浏览器的原生 ES2015+ 包，以及一个针对其他旧浏览器的包。
--target 允许您以项目库或Web组件的形式在项目内部构建任何组件 app | lib | wc | wc-async (default: app) ???
--name lib或者web组件库的名称 (default: "name" in package.json or entry filename)
--no-clean 在构建项目之前不要删除输出目录(dist)
--report 生成report.html以帮助分析包内容
--report-json 生成report.json来帮助分析包内容
--watch 监听 - 当有改变时 自动重新打包~



### vue-cli-service inspect
使用它vue-cli-service inspect来检查Vue CLI项目中的webpack配置。有关更多详细信息，请参阅检查Webpack配置

Usage: `vue-cli-service inspect [options] [...paths]`
Options:

--mode 指定环境模式 (default: development)


# ISSUE

# OTHERS
其他模版(未开始)
1. - [] 
2. - [] react-spa（redux/mobx）
3. - [] vue3.x-spa
4. - [] vue2.x-multiple page
