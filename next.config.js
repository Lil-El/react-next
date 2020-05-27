const withCss = require("@zeit/next-css");

//服务端环境
if (typeof require !== "undefined") {
  // extensions扩展名 node针对不同的文件类型有不同的加载方式 js json .node .css
  require.extensions[".css"] = (file) => {};
}

module.exports = withCss({});
