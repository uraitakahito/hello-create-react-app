module.exports = {
  /*
   * https://github.com/eslint/eslintrc/blob/main/conf/environments.js
   */
  env: {
    browser: true,
    es2024: true,
    node: true,
  },

  /*
   * https://eslint.org/docs/v8.x/use/configure/configuration-files#extending-configuration-files
   */
  extends: "eslint:all",

  parserOptions: {
    // https://eslint.org/docs/v8.x/use/configure/language-options#specifying-parser-options
    sourceType: "module",
  },

  rules: {
    // https://eslint.org/docs/v8.x/rules/capitalized-comments
    "capitalized-comments": "off",
    // https://eslint.org/docs/v8.x/rules/func-style
    "func-style": "off",
    // https://eslint.org/docs/v8.x/rules/id-length
    "id-length": "off",
    // https://eslint.org/docs/v8.x/rules/line-comment-position
    "line-comment-position": "off",
    // https://eslint.org/docs/v8.x/rules/multiline-comment-style
    "multiline-comment-style": "off",
    // https://eslint.org/docs/v8.x/rules/no-console
    "no-console": "off",
    // https://eslint.org/docs/v8.x/rules/no-inline-comments
    "no-inline-comments": "off",
    // https://eslint.org/docs/v8.x/rules/no-ternary
    "no-ternary": "off",
    // https://eslint.org/docs/v8.x/rules/one-var
    "one-var": "off",
  },
};
