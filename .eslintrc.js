module.exports = {
  extends: ['next', 'airbnb', 'airbnb/hooks', 'prettier'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['.'],
      },
      alias: {
        extensions: ['.ts', '.js', '.jsx', '.json'],
        map: [
          ['@', '.'],
          ['components', './components'],
          ['lib', './lib'],
          ['styles', './styles'],
        ],
      },
    },
  },
  reportUnusedDisableDirectives: true,
  rules: {
    "@next/next/no-img-element": "off",
    "no-nested-ternary": "off",
    "no-underscore-dangle": "off",
    "no-unused-expressions": [
      "error",
      {
        allowTernary: true
      }
    ],
    "react/no-array-index-key": "off",
    "react/jsx-props-no-spreading": [
      "error",
      {
        html: 'ignore',
        exceptions: ['Component'],
      },
    ],
    'react/prop-types': 1,
    'react/forbid-prop-types': 'off',
  },
  globals: {
    fetch: "writable",
    React: "writable"
  },
};
