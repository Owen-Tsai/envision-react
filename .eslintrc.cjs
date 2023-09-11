// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  settings: {
    'react': {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        project: path.resolve(__dirname, './tsconfig.json'),
      },
      node: {
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  plugins: ['react-refresh'],
  rules: {
    'prettier/prettier': 2,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'import/no-extraneous-dependencies': 'off',
    'react/react-in-jsx-scope': 'off',
    'semi': 'off',
    'no-console': 'off',
  },
  overrides: [
    {
      files: ['src/store/*.ts'],
      rules: {
        'no-param-reassign': 'off',
      },
    },
  ],
}
