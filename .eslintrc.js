module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/recommended',
    'eslint:recommended'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/no-unused-vars': 'off',
    'vue/no-unused-components': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
