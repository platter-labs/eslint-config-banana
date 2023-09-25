/** @type {import('eslint').Linter.BaseConfig} */
module.exports = {
  extends: './index',
  parserOptions: {
    project: './tsconfig.json',
  },
};
