This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## 加入一些功能
- 修改webpack配置依赖的插件到单独配置文件 `package.json` 增加 autoprefixer 配置。
- 增加postcss配置
- 增加 `.babelrc` 配置 
```
//.babelrc
{
  "presets": ["react", "env", "stage-0"],
  "plugins": ["transform-decorators-legacy", "transform-runtime"],
  "env": {
    "development": {
      "plugins": ["react-hot-loader/babel"]
    }
  }
}

```