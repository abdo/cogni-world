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
    'react/jsx-curly-newline': 'off',
    'react/prop-types': 'off',
    'react/state-in-constructor': 'off',
    'comma-dangle': 1,
    'arrow-parens': 'off',
    'no-nested-ternary': 'off',
    'object-curly-newline': 'off',
    'operator-linebreak': 'off',
    indent: 'off',
    'implicit-arrow-linebreak': 'off',
    'jsx-a11y/accessible-emoji': 'off',
  },
  globals: {
    fetch: false,
  },
};
