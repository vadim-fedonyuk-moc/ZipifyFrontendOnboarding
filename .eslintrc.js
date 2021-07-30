module.exports = {
  extends: ['eslint:recommended'],
  plugins: ['import'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    allowImportExportEverywhere: true
  },
  settings: {
    'import/resolver': {
      alias: {
        map: Object.entries(aliases)
      },
      node: {
        extensions: ['.js', '.scss', '.css', '.vue', '.html']
      }
    }
  },
  env: {
    browser: true,
    es6: true,
    jquery: true,
    node: true,
    jest: true
  },
  globals: {
    noty: false,
    Buffer: false
  },
  rules: {
    'no-unused-vars': ['warn', { vars: 'local', args: 'after-used' }],
    'no-extra-bind': 'error',
    'no-cond-assign': ['error', 'always'],
    eqeqeq: ['error', 'smart'],
    'guard-for-in': 'error',
    'no-loop-func': 'error',
    'no-self-compare': 'error',
    'no-use-before-define': ['error', { functions: false }],
    'no-unneeded-ternary': 'error',
    'no-prototype-builtins': 'off',
    'no-extend-native': 'error',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
      { blankLine: 'always', prev: 'import', next: '*' },
      { blankLine: 'any', prev: 'import', next: 'import' },
      { blankLine: 'always', prev: 'if', next: '*' },
      { blankLine: 'any', prev: 'if', next: 'if' },
      { blankLine: 'any', prev: 'multiline-block-like', next: '*' }
    ],
    'no-console': ['error', { allow: ['error'] }],
    'comma-dangle': ['error', 'always'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    curly: ['error', 'multi-line'],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'padded-blocks': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    'space-infix-ops': 'error',
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    'comma-style': ['error', 'last'],
    'space-before-blocks': 'error',
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    'object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: true
      }
    ],
    'key-spacing': [
      'error',
      {
        beforeColon: false
      }
    ],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          multiline: true,
          minProperties: 3
        },
        ObjectPattern: 'never',
        ImportDeclaration: 'never',
        ExportDeclaration: 'never'
      }
    ],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'template-curly-spacing': ['error', 'never'],
    'prefer-template': 'error',
    'no-useless-concat': 'error',
    'no-duplicate-imports': 'error',
    'no-param-reassign': ['error', { props: false }],
    'new-parens': ['error', 'always'],
    'default-param-last': 'error',
    'max-params': ['error', 4],
    'no-useless-computed-key': ['error', { enforceForClassMembers: true }],
    'dot-notation': 'error',
    'import/no-unresolved': [
      'error',
      {
        caseSensitive: true,
      }
    ],
    'import/named': 'error',
    'import/default': 'error',
    'import/namespace': 'error',
    'import/no-absolute-path': 'error',
    'import/no-self-import': 'error',
    'import/no-useless-path-segments': 'error',
    'import/export': 'error',
    'import/no-deprecated': 'warn',
    'import/first': 'error',
    'import/no-namespace': 'error',
    'import/order': ['error', { groups: ['builtin', 'external', 'internal', 'parent', 'sibling'] }]
  }
};