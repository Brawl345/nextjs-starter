module.exports = {
  'extends': ['airbnb', 'airbnb/hooks', 'plugin:react/recommended'],
  'plugins': [
    'react-hooks',
  ],
  'settings': {
    'import/resolver': {
      'node': {
        'paths': [
          '.',
        ],
      },
      'alias': {
        'extensions': ['.ts', '.js', '.jsx', '.json'],
        'map': [
          ['@', '.'],
          ['components', './components'],
          ['lib', './lib'],
          ['styles', './styles'],
        ],
      },
    },
  },
  'reportUnusedDisableDirectives': true,
  'rules': {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/control-has-associated-label': [2, {
      'ignoreElements': [
        'option',
        'th',
      ],
      'depth': 3,
    }],
    'indent': 'off',
    'no-underscore-dangle': 'off',
    'linebreak-style': 'off',
    'max-len': ['warn', {
      'code': 120,
      'ignoreTemplateLiterals': true,
    }],
    'no-nested-ternary': 'off',
    'no-trailing-spaces': 'off',
    'no-param-reassign': ['error', {
      'props': false,
    },
    ],
    'no-undef': 'off',
    'no-unused-expressions': ['error', {
      'allowTernary': true,
    }],
    'object-curly-newline': ['error', {
      'ImportDeclaration': 'never',
    }],
    'quote-props': ['warn', 'consistent'],
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': ['error', {
      'html': 'ignore',
      'exceptions': ['Component'],
    }],
    'react/display-name': 'off',
    'react/no-array-index-key': 'off',
    'react/no-did-update-set-state': 'off',
    'react/prop-types': 2,
    'react/forbid-prop-types': 'off',
  },
  'globals': {
    'React': 'writable',
  },
  'env': {
    'amd': true,
  },
};
