/** @type {import('eslint').Linter.BaseConfig} */
module.exports = {
  extends: './index',
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      node: true,
      typescript: true,
    },
  },
};
