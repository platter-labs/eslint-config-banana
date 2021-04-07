module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['simple-import-sort', 'sort-keys-fix', 'unused-imports'],
  rules: {
    'simple-import-sort/imports': 'error',
    'sort-keys-fix/sort-keys-fix': 'error',
    'unused-imports/no-unused-imports-ts': 'error',
  },
};
