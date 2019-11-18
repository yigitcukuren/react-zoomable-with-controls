module.exports = {
  extends: 'airbnb-base',
  parser: 'babel-eslint',
  plugins: [
    'import',
    'jest',
    'jsx-a11y',
    'react',
    'react-hooks',
    'sort-destructure-keys'
  ],
  globals: {
    document: true,
    window: true,
    fetch: true
  },
  env: {
    'jest/globals': true
  },
  rules: {
    'arrow-body-style': 0,
    'class-methods-use-this': 0,
    'complexity': ['error', 20],
    'consistent-return': 0,
    'linebreak-style': 0,
    'max-lines': ['error', { max: 1000, skipComments: true }],
    'max-statements': ['error', 40, { ignoreTopLevelFunctions: true }],
    'no-case-declarations': 0,
    'no-continue': 0,
    'no-plusplus': 0,
    'no-underscore-dangle': 0,
    'no-unneeded-ternary': 0,
    'no-useless-rename': 0,
    'no-var': 0,
    'object-shorthand': 0,
    'operator-assignment': 0,
    'vars-on-top': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        '.*rc.js',
        '*.config.js',
        '**/*.test.js',
        '**/*.spec.js',
        '**/*.e2e.js',
        '**/tests/**'
      ]
    }],
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'always-multiline'
    }],
    'react/jsx-max-props-per-line': [1, { maximum: 1, when: 'always'}],
    'sort-keys': ['error', 'asc', {natural: true}],
    'react/jsx-props-no-spreading': 'off',
    'max-len': ['error', { 'code': 100, 'tabWidth': 2 }],
    'react/forbid-prop-types': 'off',
    'react/jsx-key': 2,
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'react/jsx-sort-props': ['error', {
      'ignoreCase': true,
      'reservedFirst': true
    }],
    'sort-destructure-keys/sort-destructure-keys': 2,
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error"
  }
};