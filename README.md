### React SSR - Next

```
  npm i react react-dom axios next @types/react typescript @types/node
```

- pages 页面作为服务端的渲染和索引的根目录
- public 静态文件服务映射 : 可以访问http://localhost:3000/images/logo.png
- pages 组件代码的自动分割：在 build 时，根据 pages 下的组件进行分割，并懒加载
- 约定式路由

```
npm i @zeit/next-css antd babel-plugin-import
```

- 支持 antd 按需加载
- 支持 css
