module.exports = {
  root: true,
  env: {
    // 预定义的全局变量
    browser: true,
    node: true,
    es6: true,
  },
  parser: "vue-eslint-parser", // 使用 eslint 校验 <template> 中的代码(https://github.com/vuejs/vue-eslint-parser)
  plugins: [
    "@typescript-eslint", // 在 eslintrc 中支持配置 ts 规则
    "prettier",
  ],
  parserOptions: {
    // js 语言选项
    parser: "@typescript-eslint/parser", // 使用 ESLint 解析 ts 语法
    ecmaVersion: 2020, // ECMAScript 版本
    sourceType: "module", //设置为 "script" (默认) 或 "module"（如果代码是 ECMAScript 模块)。
    jsxPragma: "React",
    ecmaFeatures: {
      //想使用的额外的s语言特性
      jsx: true,
    },
  },
  extends: [
    // 使用推荐规则，因为部分规则冲突，不能修改extend顺序
    "plugin:vue/vue3-recommended", // vue3 推荐规则 更多规则：https://eslint.vuejs.org/
    "plugin:@typescript-eslint/recommended", // ts 在 eslintrc 下的推荐规则
    "@vue/typescript/recommended", // vue ts 推荐规则(此rule需放在最后!) https://github.com/vuejs/eslint-config-typescript

    // 以下配置是为了解决 eslint 规则与 prettier 规则的冲突
    // 不能按照eslint-config-typescript推荐的配置成@vue/prettier
    "prettier", // 用于关闭 ESLint 相关的格式规则集，https://github.com/prettier/eslint-config-prettier/blob/master/index.js

    // 下面这个配置不需要了: prettier/@typescript-eslint" has been merged into "prettier" in eslint-config-prettier 8.0.0
    // 'prettier/@typescript-eslint'// 用于关闭 @typescript-eslint/eslint-plugin 插件相关的格式规则集，https://github.com/prettier/eslint-config-prettier/blob/master/%40typescript-eslint.js
  ],
  rules: {
    // 自定义规则
    "vue/no-unused-components": "off",
    "vue/no-unused-vars": "off",
    "vue/no-v-for-template-key-on-child": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "prettier/prettier": "error", // 格式问题强制error, 也可不开启
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
