module.exports = {
  extends: [
    // Node config
    'plugin:security/recommended',

    // GraphQL config
    'plugin:@graphql-eslint/schema-recommended',

    // Base config
    './index',
  ],
  overrides: [
    {
      extends: ['plugin:prettier/recommended'],
      files: ['*.js'],
      processor: '@graphql-eslint/graphql',
    },
    {
      files: ['*.graphql'],
      parser: '@graphql-eslint/eslint-plugin',
      plugins: ['@graphql-eslint'],
      rules: {
        'prettier/prettier': 'error',
      },
    },
  ],
};
