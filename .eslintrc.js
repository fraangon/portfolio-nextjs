module.exports = {
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'prettier/flowtype',
    'prettier/react',
    'prettier/standard',
  ],
  plugins: ['babel'],
  env: {
    jest: true,
  },
  rules: {
    "react/prop-types": [
      "enabled",
      { "ignore": "ignore", "customValidators": "customValidator" }
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-extra-parens': 'off',
    'template-curly-spacing': 'off',
    indent: 'off',
    'no-mixed-operators': 'off',
    'max-nested-callbacks': ['error', 3],
    'no-magic-numbers': [
      'error',
      { ignore: [0, 1, -1, 2], enforceConst: true },
    ],
    'react/jsx-wrap-multilines': [
      'error',
      { declaration: false, assignment: false },
    ],
    'babel/no-unused-expressions': 1,
    'no-unused-expressions': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          'unknown',
          'parent',
          'internal',
          'sibling',
          'index',
        ],
      },
    ],
    'import/no-named-as-default': 'off',
    'import/no-cycle': 'off',
    'prettier/prettier': 'error',
    'import/no-unresolved': [2, { caseSensitive: false }],
    'react/jsx-closing-bracket-location': 'off',
  },
  settings: {
    'import/resolver': {
      node: {},
      'babel-module': {
        alias: {
          '~app': './src/app',
          '~scss': './src/scss',
          '~screens': './src/app/screens',
          '~config': './src/config',
          '~constants': './src/constants',
          '~redux': './src/redux',
          '~services': './src/services',
          '~utils': './src/utils',
          '~propTypes': './src/propTypes',
          '~hooks': './src/hooks',
          '~scripts': './src/scripts',
        },
      },
    },
    react: {
      version: 'detect',
    },
  },
}
