module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    jest: true,
  },
  rules: {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 1,
    'arrow-parens': 'off',
    "jsx-a11y/accessible-emoji": 'off',
  },
  globals: {
    fetch: false,
  },
};
