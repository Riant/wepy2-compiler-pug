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
``` javascript
module.exports = {
    compilers: {
        pug: {
            'pretty': false
        }
    }
};
```

参数选项配置：(pug API 参考文档 - 选项)[https://pugjs.org/zh-cn/api/reference.html#options]

# 使用
``` pug
<template lang="pug">
panel
  .title(slot='title') 测试 v-model
  div(style="display: flex; align-items: center;")
    input(v-model='inputmodel')
    text(style="margin-left: 30rpx;") Value: {{inputmodel}}
</template>
```

# 一些需要注意的点：
1. each, if 之类，依然还是要遵循 WePY 的 vue 式写法，如：
    ```
    panel(v-if="inputmodel === 'abc'")
      //- ...
    ```

    这里，经过简单测试，需要注意的是，表达式里边如果有使用到引号，务必在外边使用双引号，里边使用单引号，上述语句如果写作 `panel(v-if='inputmodel === "v-model2"')`，本来在 pug 里边是正确的写法，但是经过 Wepy 的template-loader 出来的 wxml 是有问题的。
