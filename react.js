module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    './index',
  ],
  rules: {
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-uses-react': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
