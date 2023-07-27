module.exports = {
  extends: [
    // React config
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:tailwindcss/recommended',

    // Base config
    './index',
  ],
  rules: {
    'jsx-a11y/anchor-has-content': 'off',
    'jsx-a11y/heading-has-content': 'off',
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react/jsx-sort-props': 'error',
    'react/jsx-uses-react': 'off',
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': 'error',
    // Use classnames order through official prettier plugin instead
    'tailwindcss/classnames-order': 'off',
    'tailwindcss/no-custom-classname': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
