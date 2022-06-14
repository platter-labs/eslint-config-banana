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
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react/jsx-uses-react': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    // Using classnames order through official prettier plugin instead
    'tailwindcss/classnames-order': 'off',
    'tailwindcss/no-custom-classname': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
