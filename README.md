# wepy2.x pug 编译器

# 安装
```
yarn add @wepy/compiler-pug@https://github.com/Riant/wepy2-compiler-pug.git#master -D
```

或者编辑 package.json，在 devDependencies 块新增行
```
"@wepy/compiler-pug": "https://github.com/Riant/wepy2-compiler-pug.git#master"
```
然后运行 `yarn`, 或者 `npm install` 。

# 配置 wepy.config.js
```
module.exports = {
    compilers: {
        pug: {
            'pretty': false
        }
    }
};
```

参数选项配置：(pug API 参考文档 - 选项)[https://pugjs.org/zh-cn/api/reference.html#options]
